<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <h1 class="bg-slate-600">Hello world</h1>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav></nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
