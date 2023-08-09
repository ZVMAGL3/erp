import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store/index';

const routerHistory = createWebHashHistory();
//引入组件

export default createRouter({
	history:routerHistory,
    routes:[
        {
            path:'/',
            beforeEnter: (to, from, next) => {
                if(store.state.login.loginState === true){
                    next("/personalPage")
                }else{
                    next("/login")
                }
            },
        },
        {
            path:'/login',
            name:'login',
            component: () => import('/src/pages/login.vue'),

        },
    ]
})