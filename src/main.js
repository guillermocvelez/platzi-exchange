//importa la librería que instalamos con nom
import Vue from "vue";
//importamos el componente App, es un módulo de Eslint
import App from "./App.vue";

//@ truco de webpack que representa el directorio source
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

//instancia de vue, la función mount tiene el mismo comportamiento que el elemento El, esta misma configuración equivale a los ejemplos vásicos
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
