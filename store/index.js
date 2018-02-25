export const state = () => ({
  user: {},
  profile: {},
  users: [],
  search: ''
})

export const getters = {
  users(state) {
    return state.search ? state.users.filter(user =>
      user.userName.toLowerCase().indexOf(state.search.toLowerCase()) != -1) : state.users
  }
}

export const mutations = {
  'SET_USER' (state, payload) {
    state.user = payload || {}
  },
  'SET_USERS' (state, payload) {
    state.users = payload || {}
  },
  'SET_PROFILE' (state, payload) {
    state.profile = payload || {}
  },
  'SET_SEARCH' (state, payload) {
    state.search = payload
  }
}

export const actions = {

}

export const strict = false