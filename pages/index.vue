<template>
  <section class="main">
    <UserList></UserList>
    <Chat v-show="chatToggle"></Chat>
  </section>
</template>

<script>
import UserList from '~/components/UserList.vue'
import ChatList from '~/components/ChatList.vue'
import Chat from '~/components/Chat.vue'

import firebase from 'firebase/app'
import 'firebase/auth'
import { mapState } from 'vuex';

export default {
  async fetch ({ store }) {
    firebase.auth().onAuthStateChanged(user => {
      store.commit('SET_USER', user)
    })
  },

  components: {
    UserList,
    ChatList,
    Chat
  },

  computed: {
    ...mapState(['chatToggle'])
  }
}
</script>

<style>
.main {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
