<template>
  <div id="blog">
    <Slider titulo="Bienvenido al Blog de Vue" ShowBtn estilo="small"></Slider>
    <div class="center">
      <div id="content">
        <h1 class="subheader">BLOG</h1>
        <h2 class="subheader">Artículos</h2>
        <!--Listado de articulos que vendran del api rest 
        <Articles />
        -->

        <div id="articles" v-if="articles">
          <Articles :articles="articles" />
        </div>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";

import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      articles: null,
      url: Global.url
    };
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    }
  }
};
</script>
