import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MarksView from '../views/MarksView.vue';
import AverageView from '../views/AverageView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/subject',
    name: 'subject',

    component: () => import('../views/SubjectView.vue')
  },
  {
    path: '/marks',
    name: 'marks',
    component: MarksView
  },
  {
    path: '/average',
    name: 'average',
    component: AverageView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
