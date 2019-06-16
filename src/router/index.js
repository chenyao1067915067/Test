import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../pages/index') 
const About = () => import('../pages/about') 
const Search = () => import('../pages/search') 
const Article = () => import('../pages/article') 
const Person = () => import('../pages/person')
const Detail = () => import('../pages/detail')

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/article',
            name:'article',
            component:Article
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:Detail
        },
        {
            path:'/person',
            name:'person',
            component:Person
        }
        
    ]
})

export default router