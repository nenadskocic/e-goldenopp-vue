import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
// import Login from "../components/Login.vue";
// import Dashboard from "../components/Dashboard.vue";
import FAQ from '../components/FAQ.vue';
import NewsFeed from '../components/NewsFeed.vue';
import LeadForm from '../components/LeadForm.vue';
import AppointmentBooking from '../components/AppointmentBooking.vue';
import { useAuthStore } from "../store/auth";

const routes = [
  { path: "/", name: "Home", component: Home },
  // { path: "/login", name: "Login", component: Login },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  //   meta: { requiresAuth: true },
  // },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/news', name: 'News', component: NewsFeed },
  { path: '/contact', name: 'LeadForm', component: LeadForm },
  { path: '/appointment', name: 'AppointmentBooking', component: AppointmentBooking }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }
  }
});

// Navigation Guard to protect routes
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   if (to.meta.requiresAuth && !authStore.user) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
