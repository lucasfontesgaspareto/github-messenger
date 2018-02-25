<template>
  <div class="user-list container column">
    <div v-for="user in users" :key="user.userName" :class="{ online: user.online }" class="user">
      <img :alt="user.userName" class="avatar" :src="user.imgUrl">
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['users'])
    }
  }
</script>

<style>
  .user-list {
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
  }
  .user {
    margin: 4px;
  }
  .avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
    border: 4px solid rgba(0, 0, 0, .2);
    
    max-width: 64px;
  }
  .user.online .avatar {
    border-color: #28a745;
  }
  img {
    border-style: none;
  }
</style>
