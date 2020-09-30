import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home page"
    },
    component: Home,
  }, 
  {
    path: "/tag/:id",
    name: "Tag",
    meta: {
      title: "Tag page"
    },
    component: Tag,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;