import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Aboute from "@/views/Aboute";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Aboute",
      name: "about",
      component: Aboute
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
