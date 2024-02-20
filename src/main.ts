// main.ts
import { createApp } from "vue";
import App from "./App.vue"; // Import your App component
import Home from "./Home.vue";
import Services from "./Services.vue"; // Import your Services component
import APropos from "./APropos.vue"; // Import your APropos component
import Booking from "./Booking.vue"; // Import your Booking component
import { createRouter, createWebHistory } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";
// Define your routes
const routes = [
  { path: "/services", component: Services },
  { path: "/a-propos", component: APropos },
  { path: "/booking", component: Booking },
  { path: "/", component: Home },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
