<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <div class="center">

      <router-view></router-view>


    </div>
    
    <div class="clearfix"></div>
    <Footer></Footer>
    

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MiComponente from './components/MiComponente.vue'
import Header from './components/Header.vue'
//import Home from './components/Home.vue'
//import Sidebar from './components/Sidebar.vue'
//import Slider from './components/Slider.vue'
import Footer from './components/Footer.vue'




export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/css/styles.css'
</style>
