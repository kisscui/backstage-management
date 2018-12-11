import Vue from 'vue'
import Router from 'vue-router'
import userInfo from "./views/userInfo.vue"
import login from "./views/login.vue"
Vue.use(Router)
const routes=[
  {
    path:"/",
    component:userInfo,
    meta:{
      auth:true
    }
  },
  {
    path:"/login",
    component:login
  }
]
const router=new Router({
  routes
})
router.beforeEach((to,from,next)=>{
  if (to.matched.some(route => route.meta.auth)) {
       if(localStorage.getItem('user')){
         next()
       }else{
         next({
          path: '/login',
          query: {
            returnURL: to.path
          }
         })
       }
    }else{
      next()
    }
})
export default router