<template>
  <section class="main">
    <UserList></UserList>
    <!-- <ChatList></ChatList> -->
  </section>
</template>

<script>
import UserList from '~/components/UserList.vue'
import ChatList from '~/components/ChatList.vue'

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  async fetch ({ store }) {
    firebase.auth().onAuthStateChanged(user => {
      store.commit('SET_USER', user)
    })
  },

  components: {
    UserList,
    ChatList
  }
}
</script>

<style>
.main {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
