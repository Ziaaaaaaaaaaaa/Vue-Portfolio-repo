<template>
  <Navbar/>
  <Home/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/components/Home.vue'
export default {
  components:{
    Navbar,
    Footer,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}


</style>
