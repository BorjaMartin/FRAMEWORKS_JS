<template>
  <div id="articles">
    <!--Listado articulos-->
    <div id="articles" v-if="articles && articles.length >= 1">
      <article class="article-item" v-for="article in articles" :key="article._id">
        <div class="image-wrap">
          <img :src="url+'get-image/'+article.image" :alt="article.title" v-if="article.image" />
          <img src="../assets/images/default.jpg" :alt="article.title" v-if="!article.image" />
        </div>

        <h2>{{article.title}}</h2>
        <span class="date">{{article.date | moment("from", "now")}}</span>
        <Router-link :to="{name:'article', params:{id:article._id}}">Leer más</Router-link>

        <div class="clearfix"></div>
      </article>
    </div>
    <div id="articles" v-else-if="articles && articles.length < 1">No existen artículos</div>
    <div v-else> Cargando ...</div>
  </div>
</template>

<script>
import Global from "../Global.js";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>