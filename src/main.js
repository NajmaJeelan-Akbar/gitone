import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HelloWorld from "@/components/HelloWorld.vue";
Vue.config.productionTip = false;
Vue.component("app-servers",HelloWorld);
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
