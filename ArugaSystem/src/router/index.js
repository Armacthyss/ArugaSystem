import { createRouter, createWebHistory } from 'vue-router';
import PageA from '@/components/PageA.vue';
import PageB from '@/components/PageB.vue';
import Login from '@/components/Login.vue';
import StaffLogin from '@/components/StaffLogin.vue';
import Admin from '@/components/Admin.vue';
import ParentHome from '@/components/ParentViews/ParentHomepage.vue'
import AdminHomepage from '@/components/Admin/AdminHomepage.vue'
import TestingAPI from '@/components/TestingAPI.vue';

const routes = [
  { path: '/', component: PageA },
  { path: '/page-b', component: PageB },
  { path: '/Login', component: Login },
  {path: '/StaffLogin', component: StaffLogin},
  {path: '/admin-login', component: Admin},
  {path: '/ParentHome', component: ParentHome},
  {path: '/AdminHome', component: AdminHomepage},
  {path: '/Testing', component: TestingAPI}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router