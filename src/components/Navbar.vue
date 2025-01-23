<template>
  <main>
    <div class="container text-white bg-black mt-7 rounded-xl">
      <div
        class="navbar flex justify-between items-center h-20 p-5 font-bold"
        v-for="item in navbartitle"
        :key="item"
      >
        <div class="logo flex items-center">
          <h1 class="text-2xl title-text cursor-pointer">
            <i :class="item.menuIcon" class="dark:text-white"></i>
            {{ item.userName }}
            <span class="text-blue-600"> {{ item.usersurname }}</span>
          </h1>
        </div>
        <ul
          v-for="title in item.navtitle"
          :key="title"
          class="navTitle flex justify-between"
        >
          <li
            class="  flex items-center justify-center content-center m-auto hover:bg-gray-900 py-2 px-5 rounded-lg active active:bg-gray-900 transition duration-100 cursor-pointer "
            @click="$router.push(title.link)"
          >
            <i :class="title.icon" class="pr-3"></i>{{ title.title }}
          </li>
        </ul>
        <div class="mainBtn">
          <button
            class="bg-slate-900 px-6 py-2 rounded-lg hover:bg-blue-600 ease-linear duration-100"
          >
            {{ item.btnTitle }} <i :class="item.btnIcon"></i>
          </button>
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
          menuIcon: "fa-solid fa-chart-bar ",
          userName: "Musurmon",
          usersurname: "Azamqulov",
          navtitle: [
            { title: "Asosiy", link: "/", icon: "fa-solid fa-house" },
            { title: "Loyihalar", link: "/about", icon: "fa-solid fa-server" },
            { title: "Blog", link: "/blog", icon: "fa-solid fa-pen-nib" },
            { title: "Aloqa", link: "/contact", icon: "fa-solid  fa-message" },
          ],
          btnTitle: "Birga ishlang ",
          btnIcon: "fa-solid fa-code",
        },
      ],
    };
  },
};
</script>

<style lang="css">
.navbar {
  border-radius: 13px;
  box-shadow: inset 0 0 1px #ffffff96;
}
.logo {
  width: 40%;
}
.title-text:hover span {
  color: #fff;
}
.title-text:hover {
  color: blue;
}

.navTitle {
  width: 10%;
}
.mainBtn {
  width: 40%;
  text-align: end;
  margin: 0 auto;
}
</style>