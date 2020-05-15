# Vue JS

Created: Apr 25, 2020 7:37 PM

![https://www.ma-no.org/cache/galleries/contents-1790/460-300/vuejs.jpg](https://www.ma-no.org/cache/galleries/contents-1790/460-300/vuejs.jpg)

[Introducción - Vue.js](https://es.vuejs.org/v2/guide/index.html)

**`Vue es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente.`**

# Primeros Pasos

## Instalar Vue

Installamos paquete de Vue Cli y creamos proyecto Vue
`> npm install -g @vue/cli`
`> vue create <nombre_proyecto>`

Iniciamos el servidor en la carpeta del proyecto:

`> npm run serve`

→ [http://localhost:8080/](http://localhost:3000/)

## Estructura proyecto

- `[README.md](http://readme.md)` -Documentación para arrancar proyecto
- `package.json` - Archivo de configuración y dependencias del proyecto.
- `babel.config.js`
- `src/main.js` -Fichero de configuración de Vue y carga del componente Vue
- `src/App.vue` - Componente principal
- `components/HelloWorld.vue` - Componente
- `assets/logo.png`
- `public/index.html` - HTML principal de la página
- `public/favicon.ico`
- `node_modules` - Descargas todas las dependencias y librerías

Podemos añadir en el package.json una regla para evitar los avisos de console log en el cmd. 

```json
"rules": {
      "no-console":"off"
    }
```

## Creando Nuevo Componente Vue

### Estrucutra de componente Vue

La estrucutra interna básica de un componente de vue está formado por:

```html
<template>
    
</template>

<script>
export default {
	name:'Header'
    
}
</script>
```

Template:

```html
<template>
<!-- *Código Html englobado en una sola etiqueta, solo sepuede devolver una etiqueta*  -->
<h2>{{datascript}}</h2>
</template>
```

Script

```jsx
<script>
export default {
    //Datos del componente
		name: 'NombreCompoente',
		data(){
			return {
				//Datos que voy a utilizar en mi componente 
				//que usare con dobles {{ }} en el template
				datascript:"Texto de prueba del compoente"
			}
		}
}
</script>
```

### Importar componete en App.vue

`import MiComponente from './components/MiComponente.vue'`

Añadir el componente en el export del App.vue y utilizamos la etiquete de nuestro componente.

```jsx
//1. Importamos componente
import MiComponente from './MiComponente.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
		MiComponente
  }
}
```

```html
<template>
  <div id="app">
    ...
    <MiComponente></MiComponente>
		...
  </div>
</template>
```

# Vue Router

Instalamos dependencia `npm install --save vue-router`

Importar `import VueRouter from 'vue-router';`

En la configuración de main.js

```jsx
// 1. Define route components.
import MiComponente from './components/MiComponente.vue';

Vue.use(VueRouter);

// 2. Difinir las rutas.
//path, nombre componente
const routes = [ ...
  {path: '/mi-componente', component: MiComponente },
  {path: '/', component: MiComponente }
];

// 3. Crear instancia de router y opciones de configuración
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
});

// 4. Crear y montar en la instancia principal
//Asegúrese de inyectar el enrutador con la opción de enrutador
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

## Enlaces paginas

Usamos `router-link` para definir enlaces con la propiedad `to` para pasar una de las rutas definida en el `main.js`

```html
<router-link to="/pagina1">Pagina 1</router-link>
```

## Recoger/Enviar parámetros url

```jsx
//1.- Enviar parámetros url
//Con interrogación, parametro opcional
const routes = [ ...
  {path: '/pagina1/:id?', name:'pagina', component: Pagina},
];

//2.- Recibimos el parámetro en el componente.
<script>

export default {
  name: "Pagina",
  mounted(){
		//Asignamos el valor del parametro a una variable
    this.id_desde_url = this.$route.params.id; 
  },
  data(){
    return {
      id_desde_url: null
    };
  }
};
</script>

```

```jsx
//Para poder pasar un objeto en un enlace :to 
<router-link :to="{name:'pagina1', params:{id:'Valor del parametro'}}">Pagina 1</router-link>
```

## Redirecciones

```jsx
//Dentro de un método podemos redirigir a otra url
this.$router.push('/pagina1');
//Dentro de un método podemos redirigir a otra url y podemos pasar parámetros
this.$router.push({name:'pagina1', params:{id:'Valor del parametro'});
```

# Opciones / DOM

## #el

el 
Tipo: string | HTMLElement

Proporciona a la instancia de Vue un elemento del DOM existente para montarse. Puede ser un selector CSS o un HTMLElement.

Una vez que se haya montado la instancia, el elemento resultante estará accesible como vm.$el

Si esta opción está disponible en la instanciación, la instancia ejecutará inmediatamente la compilación; de lo contrario, el usuario tendrá que llamar explícitamente a vm.$mount() para iniciar manualmente la compilación.

## # template

## # render

## # renderError

# Hooks del Ciclo de Vida

[API - Vue.js](https://es.vuejs.org/v2/api/#Opciones-Hooks-de-Ciclo-de-Vida)

![https://es.vuejs.org/images/lifecycle.png](https://es.vuejs.org/images/lifecycle.png)

> Todos los hooks de ciclo de vida tienen automáticamente su contexto `this` vinculado a la instancia, de modo que usted puede acceder a datos, propiedades computadas y métodos. Esto significa que **no debe usar una arrow function para definir un método de ciclo de vida** (por ejemplo, `created: () => this.fetchTodos ()`). La razón es que las arrow functions vinculan el contexto principal, por lo que `this` no será la instancia de Vue como espera y `this.fetchTodos` no estará definido.

## created

Se invoca sincrónicamente después de crear la instancia. En este punto, la instancia ha terminado de procesar las opciones, lo que significa que se ha configurado: observación de datos, propiedades computadas, métodos, callbacks de observadores y eventos. Sin embargo, la fase de montaje no ha comenzado y la propiedad $el aún no estará disponible.

## mounted

Este hook no se invoca durante la renderización del lado del servidor.

Es invocado después de que se ha montado la instancia, donde `el` @ se reemplaza por el recién creado `vm.$el`. Si la instancia raíz está montada en un elemento en el documento, `vm.$el` también estará en el documento cuando se llame a `mounted`.

Tenga en cuenta que `mounted` **no**
garantiza que todos los componentes secundarios también se hayan
montado. Si desea esperar hasta que se haya procesado toda la vista,
puede usar [`vm.$nextTick`](https://es.vuejs.org/v2/api/#vm-nextTick) dentro de `mounted`:

## updated

Tenga en cuenta que `updated` no garantiza que todos los componentes secundarios también se hayan vuelto a renderizar. Si desea esperar hasta que se haya vuelto a renderizar toda la vista, puede usar vm.$nextTick dentro de updated

Invocado después de que un cambio de datos hace que el DOM virtual se vuelva a procesar y actualizar.

El DOM del componente se habrá actualizado cuando se llame a este hook, por lo que puede realizar operaciones dependientes del DOM aquí. Sin embargo, en la mayoría de los casos, debe evitar cambiar el estado dentro del hook. Para reaccionar a los cambios de estado, generalmente es mejor usar una propiedad computada o un watcher en su lugar.

## destroyed

Este hook no se invoca durante la renderización del lado del servidor.

Invocado después de que una instancia de Vue ha sido destruida. Cuando se llama a este hook, todas las directivas de la instancia de Vue se han desvinculado, todos los listeners de eventos se han eliminado y todas las instancias de Vue secundarias también se han destruido.

# Directiva eventos

Podemos usar la directiva `v-on-` o `@Click` para escuchar eventos DOM y ejecutar algunos JavaScript cuando se activan.

```jsx
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <button @click="counter += 1">Add 1</button>
</div>
```

Y `@click` puede aceptar el nombre de un método al que llamar

```jsx
<div id="example-2">
  <button @click="saludar">Saludar</button>
</div>

// definir métodos bajo el objeto `methods`
<script>
...
  methods: {
    saludar: function (event) {
      // `this` dentro de los métodos apunta a la instancia de Vue
      alert('Hola ' + this.name + '!')
      // `evento` es el evento DOM nativo
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
</script>
```

# Definir Metodos

```jsx
<script>
export default {
  name: "Pagina",
  ...
  methods:{
    metodo1(){
			...
    },
		metodo2(){
			...
    }
  }
};
</script>
```

# Directivas

## Reactividad `v-model`

*Creates a two-way binding on a form input element or a component. - Crea un enlace bidireccional en un elemento de entrada de formulario o un componente.*

```html
<!--Teniendo la variable nombre declarada en nuestro data. La directiva v-model, afecta a esta variable que se al cambiar el input se verá cambiado el valor de esta variable nombre-->
<input type="text" v-model="nombre" />
      Mi nombre es: 
      <strong>{{nombre}}</strong>
```

## Condicionales `v-if` `v-else` `v-else-if`

```html
<p style="color:red" v-if="edad>=18"> Mayor de edad </p>
```

```html
<p style="color:green" v-if="edad>=18 && edad<80">Mayor de edad</p>
<p style="color:red" v-else-if="edad>=80">Edad avanzada</p>
<p style="color:red" v-else>Menor de edad</p>
```

```html
<p style="color:green" v-if="edad>=18"> Mayor de edad </p>
<p style="color:red" v-else> Menor de edad </p>
```

## Iterativas`v-for`

```jsx
<script>
export default {
  name: "MiComponente",
  data() {
    return {
			...
      peliculas: [
        { titulo: "Batman Begin",
          imagen: "https://images-na.ssl-images-amazon.com/images/I/71BTH8VUA7L._SY445_.jpg"
        },
        { titulo: "Gran Torino",
          imagen: "https://images-na.ssl-images-amazon.com/images/I/91cpBX3kNrL._SL1500_.jpg"
        },
        { titulo: "Looper",
          imagen: "https://images-na.ssl-images-amazon.com/images/I/71YHgMctCEL._SL1000_.jpg"
        }
      ]
    };
  }
};
</script>
```

```html
<!-- Con el array definido en nuestro data, podemos recorrernos los elementos con un bucle for y mostrar una lista con los elementos -->
<ol>
  <li v-for="peliculaItem in peliculas" :key="peliculaItem">{{peliculaItem.titulo}}</li>
	<img
        :src="pelicula.imagen"
        :alt="pelicula.titulo"
      />
</ol>
```

## Binding Condicional

```jsx
v-bind:class="'yeargreen'"
```

```jsx
<span class="date" v-bind:class="{
            yeargreen: pelicula.year >=2017,
            yearred: pelicula.year >=2019
            }
            ">{{pelicula.year}}</span>
        <a href="#">Leer más</a>
```

# Props

(PADRE → HIJO ) Para pasar propiedades de componente PADRE a componente HIJO:

En la llamada al componente se le pasa propiedad por parámetro:

```html
//Componente PADRE
//Para pasar un string 
<Pelicula pelicula="pelicula" ></Pelicula>
//Para pasar por parámetro un objeto utilizamos v-bind, equivalente a :
<Pelicula v-bind:pelicula="pelicula" ></Pelicula>
<Pelicula :pelicula="pelicula" ></Pelicula>
```

Recogemos la propiedad

```html
//Componente HIJO
<script>
export default {
  name: "Pelicula",
  props: ['pelicula']
};
</script>
```

(HIJO → PADRE ) Para pasar propiedades de componente HIJO a componente PADRE :

Generamos el evento desde el componente Hijo:

```jsx
//Componente HIJO
<input type="button" value="Marcar como favorita" 
      @click="marcarFAV(pelicula)"
    />

<script>
export default {
	...
	methods:{
	    marcarFAV(pelicula){
	      console.log(pelicula);
	      this.$emit('favorita', pelicula);
	    }
	  }
	...
};
</script>
```

Usamos el evento que hemos generado desde la llamada del componente PADRE a componente HIJO.

```jsx
//Componente PADRE
<Pelicula 
      :pelicula="pelicula"
      v-on:favorita="peliculaFavorita(pelicula)"
    ></Pelicula>

<script>
export default {
	...
	methods:{
      peliculaFavorita(favorita){
        this.pelifavorita=favorita;
      }
  },
	...
};
</script>
```

## Propiedades Computadas

Para abstraer lógica compleja de nuestro template y crearnos propiedades computadas.

```jsx
//Llamada normal a una variable
<h1>{{misDatos}}</h1>
//En caso de tener código html en nuestra propiedad computada usamos v-html
<p v-html="misDatos"></p>

<script>
export default {
	...
//Definimos nuestra propiedad computada
computed: {
			misDatos(){
	      return this.nombre + ' ' + this.apellidos + '<br/>' + '<strong>Sitio Web personal:</strong> '  
	    }
		...
},
data() {
    return {
      nombre:'Borja',
      apellidos: 'Martin Calvo',
			...
	}
};
</script>
```

# Filtros

[Filtros - Vue.js](https://es.vuejs.org/v2/guide/filters.html)

Existen Librerías como `Vue2-filters`

[vue2-filters](https://www.npmjs.com/package/vue2-filters)

*Vue.js le permite definir filtros que pueden usarse para aplicar formato de texto común.*

Nos podemos definir nuestros propios filtros.

```jsx
<h1>{{misDatos | mayusculas}}</h1>

<script>
export default {
	...
	filters:{
		mayusculas(value){
      return value.toUpperCase();
    }
  },
	...
};
</script>
```

# Formularios

## Validación de Formularios

[Vuelidate | A Vue.js library.](https://vuelidate.js.org/)

Instalar librería vuelidate `npm install --save vuelidate`

Importar libreria: 

```jsx
import {required, email, minLength } from "vuelidate/lib/validators";
```

## Binding en Formularios

[Binding en Formularios - Vue.js](https://es.vuejs.org/v2/guide/forms.html)

# PETICIONES HTTP

Instalamos la libreria `npm install --save axios`

# Formatear fechas

Instalar libreria `npm install --save vue-moment`

```jsx
//Añadirmos en la configuración de nuesto main.js
Vue.use(require('vue-moment'));
```

```jsx
//Añadirmos en la configuración de nuesto main.js
import VueMoment from 'vue-moment';
Vue.use(VueMoment);
```

[vue-moment](https://www.npmjs.com/package/vue-moment)

Para cambiar la configuración de las fechas y mostrar en español.

Instalar libreria moment`npm install --save moment`

Cambiar configuración en nuestro main.js

```jsx
//Añadirmos en la configuración de nuesto main.js
const moment = require('moment');
require('moment/locale/es');

Vue.use(require('vue-moment'), {moment});
```

```jsx
//Añadirmos en la configuración de nuesto main.js
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';

Vue.use(VueMoment, {moment});
```

# Alertas

Instalamos la libreria sweetalert `npm install —save sweetalert`