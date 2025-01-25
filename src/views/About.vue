<template>
  <div
    class="aboute dark:bg-black text-start my-0 h-full  w-8/12 rounded-xl"
  >
    <div class="container">
      <div class="about p-5" v-for="item in about" :key="item">
        <h1 class="text-4xl font-extrabold py-4 font-serif">
          {{ item.title }}
        </h1>
        <p class="text-gray-400">{{ item.description }}</p>
      </div>
        <div class="content w-2/4  inline-block p-5 rounded-5xl text-start" v-for="dataTitle in data" :key="dataTitle">
          <div class="images h-48 rounded-3xl ">
            <a :href="dataTitle.link">
              <img :src="dataTitle.image" class="w-full h-full" alt="">
            </a>
          </div>
          <h1 class="text-2xl font-bold py-4 text-start">{{ dataTitle.title }}</h1>
          <p class="text-gray-400 text-start">{{ dataTitle.description }}</p>
        </div>
    </div>
  </div>
</template>
<script>
// import DataServes from "../views/DataServes";
export default {
 
  data() {
    return {
      // data: DataServes,
      about: [
        {
          title: "Loyihalar",
          description: "Startaplar va mustaqil ishlangan dasturiy loyihalarim",
        },
      ],
      data: [
        {
          id: 1,
          title: "Data Serves",
          description:
            "Data Serves is a data management tool that allows you to create, edit, and manage data in a database. It is a powerful tool that can help you manage your data in a more efficient and effective way.",
          image:
            "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
          link: "https://www.google.com",
        },
        {
          id: 1,
          title: "Data Serves",
          description:
            "Data Serves is a data management tool that allows you to create, edit, and manage data in a database. It is a powerful tool that can help you manage your data in a more efficient and effective way.",
          image:
            "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
          link: "https://www.google.com",
        },
        {
          id: 1,
          title: "Data Serves",
          description:
            "Data Serves is a data management tool that allows you to create, edit, and manage data in a database. It is a powerful tool that can help you manage your data in a more efficient and effective way.",
          image:
            "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
          link: "https://www.google.com",
        },
        {
          id: 1,
          title: "Data Serves",
          description:
            "Data Serves is a data management tool that allows you to create, edit, and manage data in a database. It is a powerful tool that can help you manage your data in a more efficient and effective way.",
          image:
            "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
          link: "https://www.google.com",
        },
        {
          id: 1,
          title: "Data Serves",
          description:
            "Data Serves is a data management tool that allows you to create, edit, and manage data in a database. It is a powerful tool that can help you manage your data in a more efficient and effective way.",
          image:
            "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
          link: "https://www.google.com",
        },
      ],
    };
  },
};
</script>
<style leng="css">
.aboute {
  width: 70%;
  margin: 0 0 0 30px;
}
.images img{
  border-radius: 10px;
}
@media (max-width: 1024px) {
  .aboute {
    width: 100% !important;
    margin: 20px auto;
  }
}
</style>
