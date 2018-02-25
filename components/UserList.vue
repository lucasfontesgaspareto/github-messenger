<template>
  <div class="user-list container column">
    <div v-for="user in users" :key="user.userName" :class="{ online: user.online }" class="user">
      <img :alt="user.login" class="avatar" :src="user.avatar_url">
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/database'

  export default {
    data() {
      return {
        _users: []
      }
    },

    computed: {
      ...mapState(['user', 'profile']),
      ...mapGetters(['users'])
    },

    watch: {
      user: function (user) {
        if (!Object.keys(user).length) {
          this.$store.commit('SET_PROFILE', null)
          return false
        }

        firebase.database().ref(`profiles/${user.uid}`).on('value', snapshot => {
          this.$store.commit('SET_PROFILE', snapshot.val())
        })
      },
      profile: function (profile) {
        if (!Object.keys(profile).length) {
          this.$store.commit('SET_USERS', null)
          return false
        }

        const getUsers = () => {
          this.$store.commit('SET_USERS', profile.following_users)
        }
        getUsers()
      }
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
