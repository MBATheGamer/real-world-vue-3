import AboutView from "@/views/AboutView.vue";
import EventDetailView from "@/views/EventDetailView.vue";
import EventListView from "@/views/EventListView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/events/:id",
      name: "event-details",
      props: true,
      component: EventDetailView,
    },
  ],
});

export default router;
