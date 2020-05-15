<template src="./Create.html"></template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import axios from "axios";
import Global from "../Global.js";

import Article from "../Article.js";
import Sidebar from "./Sidebar.vue";

import swal from "sweetalert";

export default {
  name: "Edit",
  components: {
    Sidebar
  },
  data() {
    return {
      submited: false,
      article: new Article("", "", null, ""),
      url: Global.url,
      file: null,
      isEdit: true
    };
  },
  mounted(){
      this.articleId = this.$route.params.id;
      this.getArticleId(this.articleId);
  },
  validations: {
    article: {
      title: {
        required,
        minLength: minLength(2)
      },
      content: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    getArticleId(articleId) {
      axios.get(this.url+"article/"+articleId ).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submited = true;
      this.articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "/article/"+ this.articleId , this.article)
          .then(res => {
            if (res.data.status == "success") {
              //Subida de archivo
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);

                axios
                  .post(
                    this.url + "upload-image/" + res.data.article._id,
                    formData
                  )
                  .then(res => {
                    if (res.data.article) {
                      swal(
                        "Artículo editado",
                        "El Artículo se ha editado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                       this.$router.push("/article/" + this.article._id);
                    }
                  })
                  .catch(error => {
                    //Mostrar alerta de error
                    swal(
                      "Artículo no se ha editado",
                      "El Artículo no se ha editado correctamente",
                      "error"
                    );
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo editado",
                  "El Artículo se ha editado correctamente",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/article/" + this.article._id);
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>