import Vue from 'vue'
import Router from 'vue-router'
import ProductDetails from '@/components/ProductDetails'
import Enroll from '@/components/Enroll'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'ProductDetails',
            component: ProductDetails
        },
        {
            path: '/enroll',
            name: 'Enroll',
            component: Enroll
        }

    ]
})