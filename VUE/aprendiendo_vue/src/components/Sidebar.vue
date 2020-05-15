<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <Router-link to="/crearArticulo" class="btn btn-success">Crear artículo</Router-link>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form @submit.prevent="goSearch">
        <input type="text" name="search" v-model="busqueda" />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data(){
    return {
      busqueda:null
    }
  },
  methods:{
    goSearch(){
        this.$router.push('/redirect/'+ this.busqueda);
    }
  }
};
//<Router-link :to="{name:'search', params:{searchString:busqueda}}"><input type="submit" name="submit" value="Buscar" class="btn" /></Router-link>
</script>