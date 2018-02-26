<template>
  <div class="chat">
    <div class="chat-wrapper">
      <div class="chat-user">{{chat.userTo}}</div>
      <div class="chat-messages">
        <div class="chat-messages-wrapper" v-for="(msg, index) in chat.messages" :key="index">
          <div class="chat-message" :class="{ isUser: msg.userTo != user.uid }">
            {{msg.text}}
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input @keyup.13="send" v-model="text" type="text" placeholder="Your message here...!">
      </div>
      <div class="chat-fechar">
        <button @click="chatToggle">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  data() {
    return {
      text: ''
    }
  },

  computed: {
    ...mapState(['chat', 'currentUserChat', 'online', 'profile', 'user'])
  },

  methods: {
    ...mapMutations({
      chatToggle: 'SET_CHAT_TOGGLE'
    }),
    send() {
      if (this.currentUserChat) {
        firebase.database().ref(`chats/${this.profile.chats[this.currentUserChat].chatId}/messages/`).push().set({
          userFrom: this.user.uid,
          userTo: this.currentUserChat,
          text: this.text
        }).then(data => {
          this.text = ''
        })
      }
    }
  }
}
</script>

<style>
  .chat {
    position: fixed;
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
  }
  .chat:before {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, .9);
    z-index: 1;
    height: 100%;
    width: 100%;
  }
  .chat-wrapper {
    position: relative;
    background: #24292e;
    z-index: 2;
    margin: 20px;
    max-width: 600px;
    border-radius: 4px;
  }
  @media (min-width: 600px) {
    .chat-wrapper {
      margin: 40px auto;
    }
  }
  .chat-user {
    border-radius: 4px 4px 0px 0px;
    color: #fff;
    line-height: 20px;
    min-height: 30px;
    padding: 6px 8px;
    font-size: 16px;
  }
  .chat-messages {
    padding: 8px;
    min-height: 100px;
    max-height: 60vh;
    overflow-y: scroll;
    font-size: .9rem;
    background-color: rgba(255, 255, 255, .125);
    margin: 0 8px;
  }
  .chat-messages .chat-messages-wrapper {
    clear: both;
  }
  .chat-messages .chat-message {
    background: rgba(255, 255, 255, .9);
    padding: 2px;
    margin: 2px;
    width: auto;
    display: inline-block;
    border-radius: 3px;
    float: right;
  }
  .chat-messages .chat-message.isUser {
    float: left;
  }
  .chat-input {
    background: #24292e;
    padding: 8px;
    border-radius: 0px 0px 4px 4px;
  }
  .chat-input input {
    border: none;
    border-radius: 3px;
    line-height: 20px;
    min-height: 30px;
    padding: 6px 8px;
    width: 100%;
    background-color: rgba(255, 255, 255, .125);
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    outline: none;
    vertical-align: middle;
  }
  .chat-fechar {
    line-height: 100%;
  }
  .chat-fechar button {
    background: #cb2431;
    border: 0;
    border-radius: 0px 0px 4px 4px;
    margin: 0px;
    padding: 0px;
    height: 30px;
    width: 100%;
    color: white;
    font-weight: bold;
  }
</style>
