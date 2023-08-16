<template>
    <div class="top-navbar">
        <div class="logo">
            <img src="images/logo_white.png" alt="">
        </div>
        <div 
            v-for="name,index in top_navbarName" 
            class="top_navbarName" 
            :class="navbar_index === index?'navbar_caches':''"
            :style="navbar_index === 0 && index === 0 ?'background-color: #fff;':''"
            @click="click_navbar(index)"
        >{{ name }}</div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';

    let top_navbarName = ['桌面','顾客档案表','123','123']
    let navbar_index = ref(0)

    function click_navbar(index){
        navbar_index.value = index
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