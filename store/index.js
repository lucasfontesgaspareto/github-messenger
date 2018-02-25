export const state = () => ({
  users: [
    {
      userName: '@johnpapa',
      imgUrl: 'https://avatars1.githubusercontent.com/u/1202528',
      online: true
    }, {
      userName: '@vanessametonini',
      imgUrl: 'https://avatars1.githubusercontent.com/u/3089882',
      online: false
    }, {
      userName: '@Atinux',
      imgUrl: 'https://avatars1.githubusercontent.com/u/904724',
      online: false
    }
  ],
  search: ''
})

export const getters = {
  users(state) {
    return state.search ? state.users.filter(user =>
      user.userName.toLowerCase().indexOf(state.search.toLowerCase()) != -1) : state.users
  }
}

export const mutations = {
  'SET_SEARCH' (state, payload) {
    state.search = payload
  }
}

export const actions = {

}