import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:{
                name:'login'
            }
        },
        {
            path:"/login",
            name:"login",
            component:LoginComponent
        },
        {
            path:'/secure',
            name:"secure",
            component:SecureComponent,
            beforeEnter:(to,from,next)=>{
                if(localStorage.getItem("user"))
                    next()
                next(false)
            }
        },
        {
            path:'*',
            name:"login",
            component:LoginComponent,
            beforeEnter:(to,from,next)=>{
                next("/login")
            }
        }
    ]
})
