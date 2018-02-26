export const state = () => ({
  user: {},
  profile: {},
  users: [],
  search: '',
  chatToggle: false
})

export const getters = {
  users(state) {
    return state.search ? state.users.filter(user =>
      user.login.toLowerCase().indexOf(state.search.toLowerCase()) != -1) : state.users
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
  },
  'SET_CHAT_TOGGLE' (state) {
    this.state.chatToggle = !this.state.chatToggle
  }
}

export const actions = {

}

export const strict = false