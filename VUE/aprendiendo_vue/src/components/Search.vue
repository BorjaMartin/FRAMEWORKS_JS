<template>
  <div id="blog">
    <Slider :titulo="'Busqueda: ' + searchString" ShowBtn estilo="small"></Slider>
    <div class="center">
      <div id="content">
        <h1 class="subheader" v-if="articles">Artículos Encontrados</h1>
        <h1 class="subheader" v-else> Sin Resutados</h1>
        <!--Listado de articulos que vendran del api rest   -->

        <div id="articles" v-if="articles">
          <Articles :articles="articles" />
        </div>
        <div v-else>
            <h2>No se han encontrado artículos para la búsqueda </h2>
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
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      articles: null,
      url: Global.url,
      searchString : null
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "/search/"+searchString).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    }
  }
};
</script>
