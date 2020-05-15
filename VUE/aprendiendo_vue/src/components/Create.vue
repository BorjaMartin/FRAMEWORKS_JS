<template src="./Create.html"></template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import axios from "axios";
import Global from "../Global.js";

import Article from "../Article.js";
import Sidebar from "./Sidebar.vue";

import swal from "sweetalert";

export default {
  name: "Create",
  components: {
    Sidebar
  },
  data() {
    return {
      submited: false,
      article: new Article("", "", null, ""),
      url: Global.url,
      file: null
    };
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
    save() {
      this.submited = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "/save", this.article)
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
                        "Artículo Creado",
                        "El Artículo se ha creado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/blog");
                    }
                  })
                  .catch(error => {
                    //Mostrar alerta de error
                    swal(
                      "Artículo no se ha creado",
                      "El Artículo no se ha creado correctamente",
                      "error"
                    );
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo Creado",
                  "El Artículo se ha creado correctamente",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/blog");
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