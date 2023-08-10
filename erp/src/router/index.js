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
            beforeEnter: (to, from, next) => {
                if(store.state.login.loginState === true){
                    next("/homePage")
                }else{
                    store.dispatch('login/initialization').then((isLoggedIn) => {
                        if(isLoggedIn){
                            next('/homePage')
                        }else{
                            next('/login')
                        }
                    })
                }
            },
        },
        {
            path:'/login',
            name:'login',
            component: () => import('/src/pages/login.vue'),

        },
        {
            path:'/homePage',
            name:'homePage',
            component: () => import('/src/pages/homePage.vue'),

        },
    ]
})