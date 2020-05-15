<template>
  <section id="content">
    <div id="Mi-Componente">
      <h1 class="subheader">Este es Mi-Componente</h1>
      <h2>{{subtitulo}}</h2>
      <hr />

      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      Mi nombre es:
      <strong>{{nombre}}</strong>

      <h2>Direcitas condicionales</h2>
      <input type="number" v-model="edad" />
      Mi edad es:
      <strong>{{edad}}</strong>
      <p style="color:green" v-if="edad>=18 && edad<80">Mayor de edad</p>
      <p style="color:red" v-else-if="edad>=80">Edad avanzada</p>
      <p style="color:red" v-else>Menor de edad</p>

      <h2>Directivas Iterativa</h2>
      <ol>
        <li v-for="peliculaItem in peliculas" :key="peliculaItem">{{peliculaItem.titulo}}</li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Subtitulo de Mi Componente",
      nombre: "",
      edad: 18,
      peliculas: [
        {
          titulo: "Batman Begin",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/71BTH8VUA7L._SY445_.jpg"
        },
        {
          titulo: "Gran Torino",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/91cpBX3kNrL._SL1500_.jpg"
        },
        {
          titulo: "Looper",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/71YHgMctCEL._SL1000_.jpg"
        }
      ]
    };
  }
};
</script>