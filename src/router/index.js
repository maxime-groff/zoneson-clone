import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home page"
    },
    component: () => import("../views/Home.vue")
  }
];

export default router = new VueRouter({
  mode: "history",
  base: "public",
  routes
})