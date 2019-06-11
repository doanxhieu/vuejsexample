import Bootstrap from "bootstrap";
import BootstrapVue from "bootstrap-vue";
import Jquery from "jquery";
import Vue from "vue";
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from "./router";
import App from "./App.vue";

Vue.use(BootstrapVue, Bootstrap, Jquery, VueAxios, axios);
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
