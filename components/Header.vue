<template>
  <header class="header">
    <div class="section-user">
      <div v-show="user.email" @click="logout" class="avatar-wrapper">
        <img :alt="user.email" class="avatar float-left mr-1" :src="user.photoURL">
      </div>
      <div v-show="!user.email" @click="login"><a href="#">Log In</a></div>
      <input v-model="search" class="input-search" type="text" placeholder="@username">
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
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
    },
    ...mapState(['user'])
  },
  methods: {
    login() {
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(result => {
        let profile = result.additionalUserInfo.profile
        profile.uid = result.user.uid

        let maxPage = Math.ceil(profile.following / 30)
        let url = profile.following_url.replace('{/other_user}','')

        if (result.additionalUserInfo.isNewUser) {
          const getFollowingUsers = (page) => {
            this.$axios.get(`${url}?page=${page}`).then(res => {
              if (profile.following_users) {
                res.data.forEach(item => profile.following_users.push(item))
              } else {
                profile = { ...profile, following_users: res.data }
              }
              if (page < maxPage) {
                getFollowingUsers((page + 1))
              } else {
                this.$store.commit('SET_USERS', profile.following_users)
                this.$axios.defaults.headers.common['Authorization'] = `Bearer ${result.user.qa}`

                // http://localhost:5000/github-messenger/us-central1/app
                // https://us-central1-github-messenger.cloudfunctions.net/app/profile
                this.$axios.post('http://localhost:5000/github-messenger/us-central1/app/profile', profile)
                  .then(res => console.log(res))
                  .catch(error => console.log(error))
              }
            }).catch(error => {
              console.error(error.message)
            })
          }
          getFollowingUsers(1)
        }

        this.$store.commit('SET_USER', result.user)
      }).catch(error => console.log(error))
    },
    logout() {
      firebase.auth().signOut()
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
