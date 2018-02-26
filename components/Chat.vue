<template>
  <div class="chat">
    <div class="chat-wrapper">
      <div class="chat-user">{{user.login}}</div>
      <div class="chat-messages">
        <div class="chat-messages-wrapper" v-for="(msg, index) in messages" :key="index">
          <div class="chat-message" :class="{ isUser: msg.isUser }">
            {{msg.text}}
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Your message here...!">
      </div>
      <div class="chat-fechar">
        <button @click="chatToggle">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      user: {
        login: '@lucasfontesgaspareto'
      },
      messages: [
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },{
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo bem?',
          author: 'lucasfontegaspareto',
          isUser: true
        },
        {
          text: 'Oi tudo é com você?',
          author: 'gustavoquinalha'
        },
        {
          text: 'Tudo bem também!',
          author: 'lucasfontegaspareto',
          isUser: true
        }
      ]
    }
  },

  methods: {
    ...mapMutations({
      chatToggle: 'SET_CHAT_TOGGLE'
    })
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
    overflow: scroll;
    font-size: .9rem;
    background-color: rgba(255, 255, 255, .125);
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
    float: left;
  }
  .chat-messages .chat-message.isUser {
    float: right;
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
</style>
