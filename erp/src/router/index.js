import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store/index';

const routerHistory = createWebHashHistory();
//引入组件
const setupPageNames = ['company', 'regulation', 'group', 'assignment', 'management', 'checklist','permission','portion','virtual','dataCheck','settings','key'];

const router = createRouter({
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
            component: () => import('/src/pages/homePage/homePage.vue'),
            redirect:'/workbench',
            children:[
				{
					path:'/workbench',
                    name:'workbench',
					component:() => import('/src/pages/homePage/workbench/workbench.vue'),
                    redirect:'/desktop',
                    children:[
                        {
                            path:'/desktop',
                            name:'desktop',
                            component:() => import('/src/pages/homePage/workbench/desktop.vue'),
                        },
                        {
                            path:'/profileHub',
                            name:'profileHub',
                            component:() => import('/src/pages/homePage/workbench/top_navbar/profileHub.vue'),
                        },
                    ]
				},
				{
					path:'/contacts',
                    name:'contacts',
					component:() => import('/src/pages/homePage/contacts.vue'),
				},
				{
					path:'/chatroom',
                    name:'chatroom',
					component:() => import('/src/pages/homePage/chatroom.vue'),
				},
            ]
        },
        {
            path:'/setUp',
            name:'setUp',
            component:() => import('/src/pages/setUp/setUp.vue'),
            redirect:'/company',
            children:setupPageNames.map(pageName => ({
                path: `/${pageName}`,
                name: pageName,
                component: () => import(`/src/pages/setUp/${pageName}.vue`),
            })),
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to,from)
    next()
})

export default router