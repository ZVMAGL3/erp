<template>
    <div class="top-navbar">
        <div class="logo">
            <img src="images/logo_white.png" alt="">
        </div>
        <div
            class="top_navbarName" 
            :class="navbar_index === -1?'navbar_caches':''"
            :style="navbar_index === -1?'background-color: #fff;':''"
            @click="click_navbar('desktop',-1)"
        >桌面</div>
        <div 
            v-for="navbar,index in top_navbar" 
            class="top_navbarName" 
            :class="navbar_index === index?'navbar_caches':''"
            @click="click_navbar(navbar.nextRoute,index)"
        >{{ navbar.name }}</div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    let top_navbar = new Set([{name:'简历中心',nextRoute:'profileHub'}])
    let navbar_index = ref(-1)

    function click_navbar(nextRoute,index){
        router.push({ name: nextRoute })
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