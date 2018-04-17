import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Catagory from '@/components/Catagory'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import City from '@/components/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'catagory',
          component: Catagory
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          path: 'detail',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'city',
          name: 'City',
          component: City
        }
      ]
    }
  ]
})
