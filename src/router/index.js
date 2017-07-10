import Vue from 'vue'
import Router from 'vue-router'
import ProductDetails from '@/components/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ProductDetails',
    component: ProductDetails
  }]
})
