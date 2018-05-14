<template lang="html">
  <div class="chat" v-if="chat">
    <div class="chat--head container align-items-center justify-content-between">
      <div class="">
        to: <strong>{{chat.login}}</strong>
      </div>
      <div class="">
        <strong><a href="#">Github profile</a></strong>
      </div>
    </div>

    <div class="chat--content">
      <ul class="chat--content--container">

        <li class="chat--content--container--item"
          v-for="message in chat.messages"
          :class="{ 'my-chat': message.uid === user.uid }"
        >
          <div class="container align-items-center">
            <div class="chat--content--container--item--image">
              <img
                v-if="message.uid === user.uid"
                :src="chat.photoURLFrom" width="100%" alt="">
              <img
                v-if="message.uid !== user.uid"
                :src="chat.photoURLTo" width="100%" alt="">
            </div>
            <div class="chat--content--container--item--title">
              <div class="container column">
                <strong>{{chat.login}}</strong>
              </div>
            </div>
          </div>
          <div class="chat--content--container--item--text">
            <p>
              {{message.text}}
            </p>
          </div>
        </li>

      </ul>
    </div>


    <div class="chat--message container align-items-start justify-content-between">
      <div class="flex-grow-1 margin-right-10">
        <textarea v-model="text" class="form-control" name="name" rows="2" placeholder="Type a text..."></textarea>
      </div>
      <button @click="send(text); text = ''" type="button" name="button" class="btn">Send</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data() {
      return {
        text: ''
      }
    },
    computed: {
      ...mapState('account', ['user']),
      ...mapState('chat', ['chat'])
    },
    methods: {
      ...mapActions('chat', ['send'])
    }
  }
</script>

<style lang="scss" scoped>
  a {
    color: #24292e
  }

  .chat {
    > div {
      padding: 20px;
      box-sizing: border-box;
    }
    .chat--head {
      height: 100px;
      background: #fafbfc;
      border-bottom: 1px solid #c8cacc;
    }
    .chat--content {
      height: calc(100vh - 200px - 60px);
      overflow-x: hidden;
      overflow-y: auto;
    }
    .chat--message {
      height: 100px;
      background: #fafbfc;
      border-top: 1px solid #c8cacc;
      form {
        width: 100%;
      }
      .form-control {
        width: 100%;
      }
    }
  }

  .chat--content--container {
    list-style: none;
    .chat--content--container--item {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #c8cacc;
      border-radius: 3px;
      margin-bottom: 20px;
      width: 90%;
      text-align: left;
      background: #F1F1F1;
      .chat--content--container--item--image {
        width: 43px;
        height: 42px;
        background: #ddd;
        border-radius: 3px;
        margin-right: 10px;
        overflow: hidden;
      }
      .chat--content--container--item--title {}
      .chat--content--container--item--text {
        margin-top: 10px;
        color: #363636;
        font-size: 14px;
      }
      &.my-chat {
        float: right;
        text-align: right;
        background: #fff;
        .chat--content--container--item--head {
          flex-direction: row-reverse;
          .chat--content--container--item--image {
            margin-right: 0;
            margin-left: 10px;
          }
        }
        .chat--content--container--item--text {}
      }
    }
  }
</style>
