import firebase from 'firebase'
import _ from 'lodash'

export const state = () => ({
  user: false,
  online: false,
  users: []
})

export const getters = {
  profile(state) {
    let profile = {}
    if (state.user) {
      profile = state.user.profile
    }
    return profile
  }
}

export const actions = {
  authChange({ commit, dispatch }) {
    firebase.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user) {
        dispatch('setOnline', true)
      } else {
        commit('resetUsers')
      }
    })
  },
  login({ commit, dispatch }) {
    dispatch('authChange')

    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      ).then(result => {
        const profile = result.additionalUserInfo.profile
        firebase.database().ref(`pairID/${profile.id}`).set(result.user.uid)
        firebase.database().ref(`pairUID/${result.user.uid}`).set(profile.id)
        dispatch('fetchUsers', profile)
        resolve(result)
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit, dispatch }) {
    dispatch('setOnline', false)
    setTimeout(() => {
      firebase.auth().signOut().then(console.log)
    }, 400)
  },
  fetchUsers({ state, commit }, profile) {
    return new Promise((resolve, reject) => {
      
      const url = profile.following_url.replace('{/other_user}', '')
      const len = Math.ceil(profile.following / 30)
      let users = []

      commit('resetUsers')
      
      _.fill(Array(len), 0).forEach(async (e, index) => {
        try {
          const res =  await this.$axios.get(`${url}?page=${index+1}`)
          commit('concatUsers', res.data)
        } catch (error) {
          console.log('[ERROR fetchUsers:store/account.js]', error.message)
        }
      })

      resolve()
    })
  },
  setOnline({ state }, online) {
    firebase.database().ref(`account/${state.user.uid}/online`).set(online)
  },
  watchUser({ state, commit }, user) {
    firebase.database().ref(`pairID/${user.id}`).once('value', snapshot => {
      const uid = snapshot.val()
      firebase.database().ref(`account/${uid}/online`).on('value', snapshot => {
        user.online = snapshot.val()
        commit('updateUser', user)
      })
      firebase.database().ref(`account/${uid}/chats/${state.user.uid}/unview`).on('value', snapshot => {
        user.unview = snapshot.val()

        commit('updateUser', user)
      })
      user.watching = true
      commit('updateUser', user)
    })
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  resetUsers(state) {
    state.users = []
  },
  concatUsers(state, users) {
    state.users = _.concat(state.users, users)
  },
  updateUser(state, user) {
    state.users = state.users.map(u => {
      if (u.id === user.id) {
        u = user
      }
      return u
    })
  }
}