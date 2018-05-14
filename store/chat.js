import firebase from 'firebase'
import _ from 'lodash'

export const state = () => ({
  chat: false,
  user: false
})

export const getters = {
}

export const actions = {
  openChat({ commit, rootState, state }, user) {
    commit('setUser', user)
    let ref = false
    firebase.database().ref(`pairID/${user.id}`).once('value', snapshot => {
      const uid = snapshot.val()
      ref = firebase.database().ref(`account/${rootState.account.user.uid}/chats/${uid}`)
      
      ref.child('uidTo').set(uid)
      ref.child('uidFrom').set(rootState.account.user.uid)

      ref.on('value', snapshot => {
        const chat = snapshot.val()
        chat.photoURLFrom = rootState.account.user.photoURL
        chat.photoURLTo = user.avatar_url
        chat.login = user.login
        commit('setChat', chat)
      })
    })
  },
  send({ commit, rootState, state }, text) {
    firebase.database().ref(`account/${state.chat.uidFrom}/chats/${state.chat.uidTo}/unview`).set(true)
    firebase.database().ref(`account/${state.chat.uidFrom}/chats/${state.chat.uidTo}/messages`).push({
      text,
      uid: rootState.account.user.uid,
      timestamp: _.now()
    })
    firebase.database().ref(`account/${state.chat.uidTo}/chats/${state.chat.uidFrom}/unview`).set(true)
    firebase.database().ref(`account/${state.chat.uidTo}/chats/${state.chat.uidFrom}/messages`).push({
      text,
      uid: state.chat.uidFrom,
      timestamp: _.now()
    })
  },
  viewChat({ state, commit }) {
    firebase.database().ref(`account/${state.chat.uidTo}/chats/${state.chat.uidFrom}/unview`).set(false)
  }
}

export const mutations = {
  setChat(state, chat) {
    state.chat = chat
  },
  setUser(state, user) {
    state.user = user
  }
}