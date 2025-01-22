<template>
  <div>
    <BackgroundAnimation />
    <div class="content">
      
      <h1>Asosiy sahifa mazmuni</h1>
    </div>
  </div>

  <RouterView />
</template>
<script setup>
import BackgroundAnimation from "./components/BackgroundAnimation.vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<style >
.content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  margin-top: 20vh;
}
</style>
