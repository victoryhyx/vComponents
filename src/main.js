import Vue from "vue";
import App from "./App.vue";
import huUi from "./packages/index";
Vue.config.productionTip = false;

Vue.use(huUi);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
