    
<style>
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/adminlte.min.css";
</style>
<template>
  <div class="wrapper">
    <Header></Header>
    <Aside></Aside>
    <main-content></main-content>
    <Footer></Footer>
  </div>
</template>
<script src="./assets/js/jquery.min.js"></script>
<script src="./assets/js/bootstrap.bundle.min.js"></script>
<script src="./assets/js/adminlte.min.js"></script>

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