import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store/index';

const routerHistory = createWebHashHistory();
//引入组件

export default createRouter({
	history:routerHistory,
    routes:[
        {
            path:'/',
            name:'/',
            redirect:'/homePage'
        },
        {
            path:'/login',
            name:'login',
            beforeEnter: (to, from, next) => {
                if(store.state.login.loginState === true){
                    next("/homePage")
                }else{
                    next()
                }
            },
            component: () => import('/src/pages/login.vue'),

        },
        {
            path:'/homePage',
            name:'homePage',
            beforeEnter: (to, from, next) => {
                if(store.state.login.loginState === true){
                    next()
                }else{
                    store.dispatch('login/initialization').then((isLoggedIn) => {
                        if(isLoggedIn){
                            next()
                        }else{
                            next('/login')
                        }
                    })
                }
            },
            component: () => import('/src/pages/homePage.vue'),
        },
    ]
})