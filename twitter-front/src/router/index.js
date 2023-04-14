// Composables
import { createRouter, createWebHistory } from "vue-router";
import axios from 'axios'
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "/connexion",
        name: "connect",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ConnectView.vue"),
      },
      {
        path: "/utilisateurs",
        name: "users",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/UsersView.vue"),
      },
      {
        path: "/utilisateur/:id",
        name: "ProfilView",
        component: () =>
          import(/* webpackChunkName: "new" */ "../views/ProfilView.vue"),
        // Before entering the route, fetch the client data from the API
        beforeEnter: (to, from, next) => {
          axios
            .get(`http://api.twitter.local/api/user/${to.params.id}`)
            .then((response) => {
              // Pass the client data as a prop to the component
              to.params.user = response.data;
              next();
            })
            .catch((error) => {
              console.error(error);
              router.push({ path: "/" });
            });
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
