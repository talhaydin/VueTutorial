import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authentication/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "home", // Naming the route for easier navigation
    },
    // you can also name the route, this is useful for navigation
    // in order to use the name with router-link you can use the :to="{ name: 'contact' }" syntax
    {
      path: "/contact",
      component: Contact,
      name: "contact",
    },
    // Redirect from /contact-us to /contact
    { path: "/contact-us", redirect: { name: "contact" } },
    {
      path: "/login",
      component: Login,
      name: "login",
    },

    {
      path: "/productList",
      component: ProductList,
    },
    // Dynamic route for product detail, the one with the parameter, the component will check inside with v-if and display no product found if the parameter is not found
    {
      path: "/productDetail",
      component: ProductDetail,
    },
    {
      path: "/productDetail/:id",
      component: ProductDetail,
      name: "productDetail",
      props: true,
    },
    // Catch-all route for 404 Not Found
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true; // Replace with actual authentication check
  if (to.name !== "login" && !isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

// Export the router instance
export default router;
