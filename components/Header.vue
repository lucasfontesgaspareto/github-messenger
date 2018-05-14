<template>
  <header class="header">
    <div class="section-user" v-if="user">
      <div @click="logout" class="avatar-wrapper">
        <img :alt="user.email" class="avatar float-left mr-1" :src="user.photoURL">
      </div>
    </div>
    <div v-if="!isOn" @click="login"><a href="#">Log In</a></div>
  </header>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      search: ''
    }
  },

  computed: {
    ...mapState('account', { isOn: 'online', user: 'user' })
  },

  methods: {
    ...mapActions('account', ['login', 'logout', 'setOnline'])
  },

  beforeMount() {
    window.onbeforeunload = function() {
      this.setOnline(false)
      return true
    }
  }
}
</script>

<style>
  .header {
    display: flex;
    justify-content: center;

    line-height: 32px;
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;

    color: rgba(255,255,255,0.75);
    background-color: #24292e;
  }
  
  .section-user {
    display: flex;
  }

  .input-search {
    border: none;
    border-radius: 3px;
    line-height: 20px;
    min-height: 30px;
    padding: 6px 8px;
    width: 260px;

    background-color: rgba(255,255,255,0.125);
    color: #fff;

    font-size: 16px;
    font-weight: normal;
    outline: none;
    vertical-align: middle;
  }

  .section-user .avatar-wrapper {
    position: relative;
    vertical-align: middle;
    margin-right: 8px;
    line-height: 0px;
    width: 32px;
  }
  .avatar-wrapper:hover.avatar-wrapper:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.8);
    border-radius: 3px;
  }
  .section-user .avatar-wrapper .avatar {
    border: none;
    height: 32px;
  }

  a {
    color: #fff;
    margin-right: 8px;
  }
</style>
