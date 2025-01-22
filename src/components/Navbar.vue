<template>
  <main>
    <div class="container text-white bg-gray-800">
      <div
        class="navbar flex justify-between"
        v-for="item in navbartitle"
        :key="item"
      >
        <div class="logo flex">
          <img src="../assets/logo.png" alt="Logo" />
          <h1>
            {{ item.userName }} <span> {{ item.usersurname }}</span>
          </h1>
        </div>
        <ul v-for="title in item.navtitle" :key="title">
          <li>{{ title.title }}</li>
          <FontAwesomeIcon :icon="faHouse" />
        </ul>
        <div class="mainBtn">
          <button>{{ item.btnTitle }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data() {
    return {
      navbartitle: [
        {
          userName: "Musurmon",
          usersurname: "Azamqulov",
          navtitle: [
            { title: "Asosiy", link: "/" },
            { title: "Loyihalar", link: "/about" },
            { title: "Blog", link: "/blog" },
            { title: "Aloqa", link: "/contact" },
          ],
          btnTitle: "Birga ishlang ",
        },
      ],
    };
  },
};
</script>

<style>
</style>