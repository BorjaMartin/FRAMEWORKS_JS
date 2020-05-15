<template>
  <div class="general">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>
      <!--Listado articulos-->
      <div id="articles">
         <Articles :articles="articles"  />
        <!--AÑADIR ARTICULOS VIA JS-->
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";

import Articles from "./Articles.vue";

export default {
  name: "LastArticles",
  components: {
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      articles: null,
      url: Global.url
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url+"articles/last").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    }
  }
};
</script>