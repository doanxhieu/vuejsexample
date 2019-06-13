import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/pages/login'

const HelloWorld = () => import('@/components/HelloWorld')
const Login =() => import('@/components/login/login')
const WellCome =() => import('@/components/WellCome')

const IndexProducts =()=> import('@/components/products/Index')
const AddProducts =() => import('@/components/products/Add')
const ListProducts =() => import('@/components/products/List')

const Learnning =() => import('@/components/learnning/index')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'',
            name: 'WellCome',
            component: WellCome,
        },
        {
            path:'/login',
            name: 'Login',
            component:Login
        },
        
        {
            path:'/products',
            component: IndexProducts,
            children:[
                {
                    path:'add',
                    component: AddProducts
                },
                {
                    path: 'index',
                    component: ListProducts
                }
            ]
        },
        {
            path: '/learnning',
            component: Learnning
        }
    ]
});