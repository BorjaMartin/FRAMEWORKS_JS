<template>
  <section id="content">
    <h2 class="subheader">Pagina 1</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNomber">Actualizar Nombre</button>
    <button @click="redirigirABlog">Redirigir Blog</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Borja Martin"
    };
  },
  methods: {
    actualizarNomber() {
      this.nombre = "BORJA MARTIN";
      console.log(this.nombre);
    },
    redirigirABlog() {
      this.$router.push("/blog");
    }
  }
};
</script>
