<template lang="html">
  <div class="container">
    <chat-users/>
    <div class="flex-basis-500 flex-grow-3">
      <chat-messenger/>
    </div>
  </div>
</template>

<script>
  import chatUsers from '@/pages/chat/users'
  import chatMessenger from '@/pages/chat/chat'
  export default {
    components: {
      chatUsers,
      chatMessenger
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
