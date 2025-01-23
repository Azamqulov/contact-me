<template>
  <div class="main-content text-white bg-black rounded-xl">
    <div class="container p-5 text-start" v-for="user in userData" :key="user">
      <div class="images h-56 w-full rounded-xl border-4 border-green-950">
        <img :src="user.userImage" class="rounded-xl w-full h-full" alt="" />
      </div>
      <h1 class="text-3xl font-bold text-start border-l-green-950 py-5">
        {{ user.userName }}
      </h1>
      <p>{{ user.userTitle }}</p>
      <div class="allBtn py-5 flex justify-between pr-6 font-bold">
        <button
          class="hover:bg-blue-900 px-4 py-3 rounded-lg bg-blue-600 ease-linear duration-150"
        >
          <i class="fa-solid fa-phone pr-2"></i> Bog'lanish
        </button>
        <button
          class="bg-slate-900 px-5 py-3 rounded-lg hover:bg-slate-950 ease-linear duration-150"
        >
          <i class="fa-brands fa-youtube pr-2"></i> Obuna bo'lish
        </button>
      </div>
      <ul class="userSocial" v-for="icons in user.userSocial" :key="icons">
        <li
          class="allIcon  text-2xl bg-slate-900 rounded-lg px-3 py-2 hover:text-blue-600 hover:shadow-gray-500 mr-6"
        >
          <i :class="icons.icon" class="rounded-sm "></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [
        {
          userName: "Musurmon Azamqulov",
          userTitle:
            "Tadbirkor, Full Stack Dasturchi 🖥️ & Youtuber, Startup Asoschi, PHP & Laravel Developer.",
          userImage:
            "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg",
          userSocial: [
            {
              title: "Facebook",
              link: "https://www.facebook.com/musurmon.azamqulov",
              icon: "fa-brands fa-facebook",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/musurmon_azamqulov/",
              icon: "fa-brands fa-instagram",
            },
            {
              title: "Twitter",
              link: "https://twitter.com/MusurmonAzamqul",
              icon: "fa-brands fa-twitter",
            },
            {
              title: "Telegram",
              link: "https://t.me/musurmon_azamqulov",
              icon: "fa-brands fa-telegram",
            },
            {
              title: "Github",
              link: "https://t.me/musurmon_azamqulov",
              icon: "fa-brands fa-github",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.main-content {
  width: 29%;
  height: 75vh;
}
.userSocial {
  display: inline-flex;
}
.allIcon:hover {
  transition: 0.3s;
  box-shadow: 0 0 5px gray;
}
</style>