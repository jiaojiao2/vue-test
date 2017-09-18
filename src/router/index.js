import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
// import Weitao from '../views/Weitao'
import Cart from '../views/Cart'
import Found from '../views/Found'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/weitao',
    //   name: 'Weitao',
    //   component: Weitao
    // },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }

  ]
})
