import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: "Dashboard",
    component: ()=>import( /*webpackChunkName: "Dashboard" */'../views/Dashboard.vue')
},
{
  path: '/dashboard/:page',
  name: "Dashboard",
  component: ()=>import( /*webpackChunkName: "Dashboard" */'../views/Dashboard.vue')
},
{
    path: '/about',
    name: "About",
    component: ()=>import( /*webpackChunkName: "About" */'../views/About.vue')
},
{
    path: '/notfound',
    name: "NotFound",
    component: ()=>import( /*webpackChunkName: "NotFound" */'../views/NotFound.vue')
},
{
  path: '/calculator',
  name: "Calc",
  component: ()=>import( /*webpackChunkName: "Calc" */'../components/Calc.vue')
},
{
    path: '*',
    redirect: '/notfound'
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
