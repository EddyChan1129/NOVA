// router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import loginPage from '../views/loginPage.vue';
import homePage from '../views/homePage.vue';
import findpw from '../components/findpw.vue';
import personalCenter from '../views/personalCenter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/findpw',
    name: 'findpw',
    component: findpw
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;