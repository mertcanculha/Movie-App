import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import { store } from "./store";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueRouter);
import Search from "./components/Search.vue";
import FavoriteMovies from "./components/FavoriteMovies.vue";
import MovieDetail from "./components/MovieDetail.vue";
import HomePage from "./components/HomePage.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/favorite",
      component: FavoriteMovies,
    },
    {
      path: "/detail",
      component: MovieDetail,
    },
    {
      path: "/homepage",
      component: HomePage,
    },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/js/bootstrap.js";
