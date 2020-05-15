<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="pelicula.imagen" :alt="pelicula.titulo" />
    </div>

    <h2>{{pelicula.titulo}}</h2>
    <span
      class="date"
      v-bind:class="{
            yeargreen: pelicula.year >=2015,
            yearred: pelicula.year >=2019
            }
            "
    >{{pelicula.year}}</span>
    <a href="#">Leer más</a>

    <input type="button" value="Marcar como favorita" 
      @click="marcarFAV(pelicula)"
    />
    

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ["pelicula"],
  methods:{
    marcarFAV(pelicula){
      this.$emit('favorita', pelicula);
    }
  }
};
</script>