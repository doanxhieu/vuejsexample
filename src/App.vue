    
<style>
@import './assets/dist/css/adminlte.min.css';
@import './assets/plugins/font-awesome/css/font-awesome.min.css';
</style>
<template>
  <div class="wrapper">
    <Header></Header>
    <Aside></Aside>
    <main-content></main-content>
  </div>
</template>
<script>

// components
import Header from "./layouts/header";
import Aside from "./layouts/aside";
import MainContent from "./layouts/MainContent";
import Footer from "./layouts/Footer";

export default {
  name: "app",
  components: {
    Header,
    Aside,
    MainContent,
    Footer
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route;
    }
  },
  mounted() {}
};
</script>