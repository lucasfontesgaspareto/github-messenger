<template>
  <header class="header">
    <div class="section-user">
      <div v-show="toggle" @click="toggle = !toggle" class="avatar-wrapper">
        <img alt="@lucasfontesgaspareto" class="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/8084651">
      </div>
      <div v-show="!toggle" @click="toggle = !toggle"><a href="#">Log In</a></div>
      <input v-model="search" class="input-search" type="text" placeholder="Search">
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      toggle: true
    }
  },
  computed: {
    search: {
      get: function() {
        return this.$store.state.search
      },
      set: function(value) {
        return this.$store.commit('SET_SEARCH', value)
      }
    }
  },
  methods: {
    logout() {
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
