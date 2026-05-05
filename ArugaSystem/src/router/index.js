import { createRouter, createWebHistory } from 'vue-router';
import PageA from '@/components/PageA.vue';
import PageB from '@/components/PageB.vue';
import Login from '@/components/Login.vue';
import StaffLogin from '@/components/StaffLogin.vue';
import Admin from '@/components/Admin.vue';
import ParentHome from '@/components/ParentViews/ParentHomepage.vue'

import ParentManager from '@/components/ParentManager.vue';

// Admission Staff Components
import AdminHomepage from '@/components/Admin/AdminHomepage.vue'
import StaffParentRecord from '@/components/Admin/StaffParentRecord.vue';
import StaffChildRecord from '@/components/Admin/StaffChildRecord.vue';
import StaffDoctorNurse from '@/components/Admin/StaffDoctorNurse.vue';
import StaffVaccineInventory from '@/components/Admin/StaffVaccineInventory.vue';
import StaffReport from '@/components/Admin/StaffReport.vue';
import StaffCalendar from '@/components/Admin/StaffCalendar.vue';

const routes = [
  // General Routes
  { path: '/', component: Login },
  { path: '/Login', component: PageA },
  { path: '/page-b', component: PageB },
  { path: '/StaffLogin', component: StaffLogin },
  { path: '/admin-login', component: Admin },
  { path: '/ParentHome', component: ParentHome },
  { path: '/ParentTest', component: ParentManager },
  
  // Admission Staff Routes
  { path: '/AdminHome', name: 'AdminHome', component: AdminHomepage },
  { path: '/StaffParent', name: 'StaffParent', component: StaffParentRecord },
  { path: '/StaffChild', name: 'StaffChild', component: StaffChildRecord },
  { path: '/StaffDocNurse', name: 'StaffDocNurse', component: StaffDoctorNurse },
  { path: '/StaffVaccine', name: 'StaffVaccine', component: StaffVaccineInventory },
  { path: '/StaffReport', name: 'StaffReport', component: StaffReport },
  { path: '/StaffCalendar', name: 'StaffCalendar', component: StaffCalendar },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;