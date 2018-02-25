<template>
  <section class="main">
    <UserList></UserList>
    <!-- <ChatList></ChatList> -->
  </section>
</template>

<script>
import UserList from '~/components/UserList.vue'
import ChatList from '~/components/ChatList.vue'

export default {
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
