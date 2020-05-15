<template>
  <div id="Peliculas">
    <Slider titulo="Listado de peliculas" estilo="small"></Slider>
    <section id="content">
      <h1 class="subheader">Artículos</h1>
      <h1>{{misDatos | mayusculas}}</h1>
      
      <div class="favorita" v-if="pelifavorita">
        
        <h2>{{pelifavorita.titulo}}</h2>
      </div>
      <!--Listado articulos-->
      <div id="articles">
        <div v-for="pelicula in peliculasMayus" v-bind:key="pelicula.titulo">
          <Pelicula 
            :pelicula="pelicula"
            v-on:favorita="peliculaFavorita(pelicula)"
          ></Pelicula>
        </div>
        <!--AÑADIR ARTICULOS VIA JS-->
      </div>
    </section>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Slider from "./Slider.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Slider
  },
  methods:{
      peliculaFavorita(favorita){
        this.pelifavorita=favorita;
      }
  },
  computed: {
    peliculasMayus(){
      var peliculasMod = this.peliculas;
      console.log(peliculasMod);
      for(var i=0; i < peliculasMod.length ; i++){
        peliculasMod[i].titulo = peliculasMod[i].titulo.toUpperCase();
      }
      
      return peliculasMod;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellidos 
    }
  },
  filters:{
    mayusculas(value){
      return value.toUpperCase();
    }
  },
  data() {
    return {
      nombre:'Borja',
      apellidos: 'Martin Calvo',
      pelifavorita: null ,
      peliculas: [
        {
          titulo: "Batman Begin",
          year: 2019,
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/71BTH8VUA7L._SY445_.jpg"
        },
        {
          titulo: "Gran Torino",
          year: 2015,
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/91cpBX3kNrL._SL1500_.jpg"
        },
        {
          titulo: "Looper",
          year: 2017,
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/71YHgMctCEL._SL1000_.jpg"
        }
      ]
    };
  }
};
</script>
