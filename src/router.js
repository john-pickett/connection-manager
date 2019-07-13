import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue';
import ContactList from './components/ContactList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
        path: '/list',
        name: 'list',
        component: ContactList
    },
    {
        path: '/list/:id',
        name: 'list',
        component: ContactList
    }
  ]
})
