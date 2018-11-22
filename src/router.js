import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContactTable from './components/ContactTable.vue';
import AddContact from './components/AddContact.vue';
import EditContact from './components/EditContact.vue';
import ViewContact from './components/ViewContact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactTable
    },
    {
        path: '/edit',
        name: 'edit',
        component: EditContact
    },
    {
        path: '/new',
        name: 'add',
        component: AddContact
    },
    {
        path: "/view/:id",
        name: 'view',
        component: ViewContact
    }
  ]
})
