<template>
  <header class="header">
    <input v-model="search" class="input-search" type="text" placeholder="Search a user">
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style>
  .header {
    display: flex;
    justify-content: center;

    height: 56px;
    padding-top: 12px;
    padding-bottom: 12px;

    color: rgba(255,255,255,0.75);
    background-color: #24292e;
  }

  .input-search {
    vertical-align: middle;
    display: block;
    
    border: none;
    border-radius: 3px;
    line-height: 20px;
    min-height: 30px;
    margin: 0 auto;
    padding: 6px 8px;
    width: 300px;

    background-color: rgba(255,255,255,0.125);
    color: #fff;

    font-size: 16px;
    font-weight: normal;
    outline: none;
  }
</style>
