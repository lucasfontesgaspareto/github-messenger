<template lang="html">
  <div class="chat">
    <div class="chat--head container align-items-center justify-content-between">
      <div class="">
        to: <strong>Usain Bolt</strong>
      </div>
      <div class="">
        <strong><a href="#">Github profile</a></strong>
      </div>
    </div>

    <div class="chat--content">
      <ul class="chat--content--container">

        <li class="chat--content--container--item " v-for="x in 2">
          <div class="container align-items-center">
            <div class="chat--content--container--item--image">
              <img src="https://avatars0.githubusercontent.com/u/8084651?s=64&v=4" width="100%" alt="">
            </div>
            <div class="chat--content--container--item--title">
              <div class="container column">
                <strong>Usain Bolt</strong>
                <span>@usainbolt</span>
              </div>
            </div>
          </div>
          <div class="chat--content--container--item--text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </li>

        <li class="chat--content--container--item my-chat" v-for="x in 2">
          <div class="chat--content--container--item--head container align-items-center">
            <div class="chat--content--container--item--image">
              <img src="https://avatars0.githubusercontent.com/u/8084651?s=64&v=4" width="100%" alt="">
            </div>
            <div class="chat--content--container--item--title">
              <div class="container column">
                <strong>Usain Bolt</strong>
                <span>@usainbolt</span>
              </div>
            </div>
          </div>
          <div class="chat--content--container--item--text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </li>

      </ul>
    </div>


    <div class="chat--message container align-items-start justify-content-between">
      <div class="flex-grow-1 margin-right-10">
        <textarea class="form-control" name="name" rows="2" placeholder="Type a text..."></textarea>
      </div>
      <button type="button" name="button" class="btn">Send</button>
    </div>
  </div>
</template>

<script>
  export default {}
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
      max-width: 90%;
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
        color: #909090;
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
