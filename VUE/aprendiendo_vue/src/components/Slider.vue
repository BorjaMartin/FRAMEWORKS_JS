<template>
  <div
    id="slider"
    v-bind:class="{
                        'slider-big': estilo==='big',
                        'slider-small': estilo==='small'
                        }
                        "
  >
    <h1>{{titulo}}</h1>
    <div id="enlace" v-if="ShowBtn">
      <router-link :to=ShowBtn class="btn-white">Ir al blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["titulo", "ShowBtn", "estilo"]
};
</script>