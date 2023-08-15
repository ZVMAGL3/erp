<template>
    <div class="top-navbar">
        <div class="logo">
            <img src="images/logo_white.png" alt="">
        </div>
        <div v-for="name in top_navbarName">{{ name }}</div>
    </div>
</template>

<script setup>
    let top_navbarName = ['桌面','顾客档案表']
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
    }

    .logo{
        height: 45px;
    }
    
    .logo>img{
        height:45px;
    }

</style>