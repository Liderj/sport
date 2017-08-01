import Vue from 'vue'
import Router from 'vue-router'
import ProductDetails from '@/components/ProductDetails'
// import Address from '@/components/Address'
const Address = resolve => require(['@/components/Address'], resolve)
import Enroll from '@/components/Enroll'
import Login from '@/components/login/Login'
import LoginIndex from '@/components/login/Loginindex'
import Register from '@/components/login/Register'
import Mobile from '@/components/login/Mobile'
import Forget from '@/components/login/Forget'
import Bind from '@/components/login/Bind'


import Orders from '@/components/orders/Index'
import Pay from '@/components/orders/Pay'
import Comment from '@/components/orders/Comment'
import Detail from '@/components/orders/Detail'
import Userinfo from '@/components/orders/Userinfo'
import Success from '@/components/orders/Paycallback'








Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/page/details/:id',
            name: 'ProductDetails',
            component: ProductDetails
        },
        {
            path: '/page/details/address/:id',
            name: 'Address',
            component: Address
        },
        {
            path: '/page/enroll/:id',
            name: 'Enroll',
            component: Enroll,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/login',
            name: 'Login',
            component: Login,
            children: [{
                path: '/page/login',
                component: LoginIndex
            }, {
                path: '/register',
                component: Register
            }, {
                path: '/mobile',
                component: Mobile
            }, {
                path: '/forgetpwd',
                component: Forget
            }]
        },
        {
            path: '/page/bind',
            name: 'Bind',
            component: Bind,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/orders',
            component: Orders,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/orders/pay/:id',
            component: Pay,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/orders/success/:id',
            component: Success,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/orders/Detail/:id',
            component: Detail,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/orders/detail/user/:id',
            component: Userinfo,
            meta: {
                requireAuth: true,
            },
        },
        {
            path: '/page/orders/comment/:id',
            component: Comment,
            meta: {
                requireAuth: true,
            },
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }

})