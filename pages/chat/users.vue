<template lang="html">
  <div class="">
    <div class="users--list--control left" @click="showChat = !showChat">
      <!-- <button type="button" name="button" class="btn" >></button> -->
      <span>+</span>
    </div>

    <transition name="fade-chat">
      <div class="" v-show="showChat">
        <div class="chat-container flex-basis-200 flex-grow-1">
          <div class="users">
            <div class="users--search container">
              <div class="flex-grow-1 margin-right-10">
                <input v-model="search" type="text" class="form-control" placeholder="Search...">
              </div>
              <button type="button" name="button" class="btn">+</button>
            </div>

            <div class="users--list--control" @click="showChat = !showChat">
              <!-- <button type="button" name="button" class="btn" @click="showChat = !showChat">< </button> -->
              <span>-</span>
            </div>

            <div class="users--list ">

              <ul class="users--list--conversation">
                <li class="list-title">not viewed<strong>({{usersUnview.length}})</strong> </li>
                <li v-for="user in usersUnview" class="conversation" @click="open(user)">
                  <div class="user container align-items-start">

                    <div class="user--image">
                      <img :src="user.avatar_url" width="100%" alt="">
                    </div>
                    <div class="user--info container column">
                      <div class="">
                        <strong>{{user.login}}</strong>
                      </div>
                      <div class="">
                        <span>{{user.login}}</span>
                      </div>
                      <div class="">
                        <p>{{user.lastUnviewMsg}}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <ul>
                <li class="list-title">Online <strong>({{usersOnline.length}})</strong> </li>
                <li v-for="user in usersOnline" @click="open(user)">
                  <div class="user container align-items-start">
                    <div class="user--image">
                      <img :src="user.avatar_url" width="100%" alt="">
                    </div>
                    <div class="user--info container column">
                      <div class="">
                        <strong>{{user.login}}</strong>
                      </div>
                      <div class="">
                        <span>@{{user.login}}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <ul>
                <li class="list-title">All <strong>({{usersOffline.length}})</strong> </li>
                <li v-for="user in usersOffline" @click="open(user)">
                  <div class="user container align-items-start">
                    <div class="user--image">
                      <img :src="user.avatar_url" width="100%" alt="">
                    </div>
                    <div class="user--info container column">
                      <div class="">
                        <strong>{{user.login}}</strong>
                      </div>
                      <div class="">
                        <span>@{{user.login}}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        showChat: true,
        search: ''
      }
    },
    computed: {
      ...mapState('account', ['user']),
      users: {
        get() {
          let users = this.$store.state.account.users
          if (this.search) {
            users = this.$store.state.account.users.filter(user => user.login.indexOf(this.search) != -1)
          }
          return users
        }
      },
      usersOnline: {
        get() {
          return this.users.filter(user => user.online)
        }
      },
      usersOffline: {
        get() {
          return this.users.filter(user => !user.online)
        }
      },
      usersUnview: {
        get() {
          return this.users.filter(user => user.unview)
        }
      }
    },
    watch: {
      users: 'fetchUserInfo'
    },
    methods: {
      ...mapActions('account', ['watchUser']),
      ...mapActions('chat', ['openChat', 'viewChat']),
      fetchUserInfo(users) {
        users.forEach(async user => {
          if (!user.watching) {
            this.watchUser(user)
          }
        })
      },
      scrollToBot() {
        const el = document.querySelector('.chat--content')
        if (el && el.scrollTop >= 0) {
          setTimeout(() => {
            el.scrollTop = 99999
            this.viewChat()
          }, 400)
        }
      },
      open(user) {
        this.openChat(user)
        this.scrollToBot()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 720px) {
    .chat-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #c8cacc;
      z-index: 100;
    }
  }

  .users {
    background: #fafbfc;
    min-height: calc(100vh - 60px);
    border-right: 1px solid #c8cacc;
    box-sizing: border-box;
    position: relative;
    .users--search {
      border-bottom: 1px solid #c8cacc;
      padding: 20px;
      box-sizing: border-box;
      input {
        width: 100%;
      }
    }
    .users--list {
      padding: 20px;
      height: calc(100vh - 131px);
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      ul {
        margin-bottom: 40px;
        list-style: none;
        &:last-child {
          margin-bottom: 0;
        }
        li {
          margin-bottom: 10px;
          border-radius: 3px;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid transparent;
          overflow: hidden;
          cursor: pointer;
          transition: .3s;
          &:last-child {
            margin-bottom: 0;
          }
          &:hover {
            border: 1px solid #c8cacc;
            background: #fff;
          }
          &.list-title {
            &:hover {
              background: transparent;
              border: 1px solid #fafbfc;
            }
          }
        }
      }
      .users--list--conversation {
        li.conversation {
          border: 1px solid #c8cacc;
          &:hover {
            background: #E9E9E9;
          }
          p {
            opacity: .5;
            white-space: nowrap
          }
        }
      }
    }
    .user {
      .user--image {
        width: 32px;
        height: 32px;
        background: #c8cacc;
        border-radius: 3px;
        margin-right: 10px;
        overflow: hidden;
      }
      .user--info {
        strong {}
      }
    }
  }

  .users--list--control {
    position: absolute;
    top: 60px;
    right: 20px;
    font-size: 30px;
    opacity: .5;
    cursor: pointer;
    transition: .3s;
    &:hover {
      opacity: 1;
    }
    &.left {
      left: 5px;
      top: 45px;
    }
  }
</style>
