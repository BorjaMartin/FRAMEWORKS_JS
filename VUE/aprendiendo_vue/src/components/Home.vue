<template>
  <div id="home">
    <Slider
      titulo="Bienvenido al sitio Web de Borja Martín creado con Vue"
      ShowBtn="blog"
      estilo="big"
    ></Slider>
    <div class="center">
      <div id="content">
        <LastArticles></LastArticles>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import LastArticles from "./LastArticles.vue";
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

export default {
  name: "Home",
  components: {
    LastArticles,
    Sidebar,
    Slider
  }
};
</script>
