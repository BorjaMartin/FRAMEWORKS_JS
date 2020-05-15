<template>
  <section id="content">
    <article class="article-item article-detail" v-if="article">
      <div class="image-wrap" v-if="article.image">
        <img :src="url+'get-image/'+article.image" :alt="article.title" v-if="article.image" />
        <img src="../assets/images/default.jpg" :alt="article.title" v-if="!article.image" />
      </div>

      <h1 class="subheader">{{article.title}}</h1>
      <span class="date">{{article.date | moment("from","now")}}</span>
      <p>{{article.content}}</p>
      <router-link :to="{name:'editar', params:{id:article._id}}" class="btn btn-warning">Editar</router-link>
      <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>
      <div class="clearfix"></div>
    </article>
  </section>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";
import swal from "sweetalert";

export default {
  name: "Article",
  mounted() {
    this.articleId = this.$route.params.id;
    this.getArticleId(this.articleId);
  },
  data() {
    return {
      url: Global.url,
      articleId: "",
      article: []
    };
  },
  methods: {
    getArticleId(articleId) {
      axios.get(this.url + "article/" + articleId).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(articleId) {
      swal({
        title: "¿Estás seguro de eliminar el artículo?",
        text: "Si eliminas el artículo no se podrá recuperar!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then(res => {
            if (res.data.status == "success") {
              swal("Poof! El artículo ha sido eliminado correctamente!", {
                icon: "success"
              });
              this.$router.push("/blog");
            }
          });
        } else {
          swal("Salvado! No se ha eliminado!");
        }
      });
    }
  }
};
</script>