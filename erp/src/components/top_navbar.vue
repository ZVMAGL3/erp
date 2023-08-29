<template>
    <div class="top-navbar">
        <div class="logo">
            <img src="images/logo_white.png" alt="">
        </div>
        <div
            class="top_navbarName" 
            :class="navbar_index.nextRoute === 'desktop'?'navbar_caches':''"
            :style="navbar_index.nextRoute === 'desktop'?'background-color: #fff;':''"
            @click="click_desktop"
        >桌面</div>
        <div 
            v-for="navbar,index in top_navbar" 
            class="top_navbarName" 
            :class="navbar_index.nextRoute === navbar.nextRoute?'navbar_caches':''"
            @click="click_navbar(navbar)"
            @dblclick="dblclick_navbar(navbar)"
        >{{ navbar.navbarName }}</div>
    </div>
</template>

<script setup>

    import { useRouter } from 'vue-router';
    import { useMapState } from '/src/hooks/useMapState'
    import { useStore } from "vuex"

    const store = useStore();
    const router = useRouter();
    const { top_navbar,navbar_index } = useMapState('homePage', ['top_navbar','navbar_index']);

    let desktop = {navbarName:'桌面',nextRoute:'desktop'}
    let clickTimer = null

    //单击
    function click_navbar(childNavbar){
        clearTimeout(clickTimer); // 清除之前的计时器
        clickTimer = setTimeout(() => {
            store.dispatch('homePage/addTop_navbar',childNavbar)
            router.push({ name: childNavbar.nextRoute })
        }, 150); // 设置一个较短的延时，如果在这个延时内双击，则不触发单击事件
    }

    //双击
    function dblclick_navbar(nextRoute){
        clearTimeout(clickTimer); // 清除之前的计时器
        store.commit('homePage/deleteSet',['top_navbar',nextRoute])
        if(navbar_index.value,nextRoute === nextRoute){
            click_desktop()
        }
    }

    function click_desktop(){
        store.commit('homePage/replaceAll',['navbar_index',desktop])
        router.push({ name: 'desktop' })
    }

</script>

<style scoped>  

    .top-navbar{
        height:56px;
        width:100%;
        background: #333;
        color: #FFF;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        overflow: hidden;
    }

    .logo{
        height: 45px;
    }
    
    .logo>img{
        margin-left: -7px;
        margin-top: 5px;
        height:45px;
    }

    .top_navbarName{
        margin-bottom: 2px;
        margin-left: 2px;
        padding:0px 15px;
        height: 30px;
        line-height: 30px;
        white-space: nowrap;
        background-color: #939393;
        color: #000;
        font-size: 12px;
        font-family:"微软雅黑"
    }

    .top_navbarName:hover{
        background-color: #E9E7E7;
    }
    
    .navbar_caches{
        margin-bottom: 0px;
        padding:1px 15px;
        height: 34px;
        line-height: 30px;
        background-color: #E9E7E7;
    }

</style>