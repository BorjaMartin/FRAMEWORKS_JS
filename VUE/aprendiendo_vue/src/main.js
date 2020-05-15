import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Vulidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';


import Home from './components/Home.vue';
import LastArticles from './components/Home.vue';
import Article from './components/Article.vue';
import MiComponente from './components/MiComponente.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import peliculas from './components/Peliculas.vue'
import Search from './components/Search.vue'
import Create from './components/Create.vue'
import Redirect from './components/Redirect.vue'
import Edit from './components/Edit.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vulidate);

Vue.use(VueMoment, {moment});

const routes = [
  {path: '/home', component: Home},
  {path: '/blog', component: Blog},
  {path: '/formulario', component: Formulario},
  {path: '/pagina1/:id?', name:'pagina1', component: Pagina},
  {path: '/peliculas', name:'peliculas', component: peliculas},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/article/:id', name:'article', component: Article},
  {path: '/editar/:id', name:'editar', component: Edit},
  {path: '/eliminar/:id', name:'eliminar', component: Edit},
  {path: '/buscador/:searchString', name:'search', component: Search},
  {path: '/redirect/:searchString', component: Redirect},
  {path: '/crearArticulo', component: Create},
  {path: '/mi-componente', component: MiComponente},
  {path: '/', component: Home},
  {path: '*', component: ErrorComponent}

];

const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



