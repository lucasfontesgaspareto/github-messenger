<template>
  <section class="main">
    <list></list>
  </section>
</template>

<script>
import List from '~/components/List.vue'

export default {
  components: {
    List
  }
}
</script>

<style>
.main
{
  min-height: 100vh;
}
</style>
