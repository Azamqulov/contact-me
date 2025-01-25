<template>
  <div>
    <div class="content">
      <Navbar />
      <main>
        <div class="content">
          <div class="container  py-5 px-2 2xl:flex xl:flex md:block">
            <ContactMe  class="flex md:w-full" />
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
  <BackgroundAnimation />

  <!-- <RouterView /> -->
</template>
<script setup>
import BackgroundAnimation from "./components/BackgroundAnimation.vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import ContactMe from "./components/ContactMe.vue";
</script>

<style  scoped>
.content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
}
</style>
