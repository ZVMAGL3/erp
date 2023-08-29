<template>
    <div class="shell">
        <div class="top-navbar">
            <img src="images/logo_white_2.png" alt="">
        </div>
        <div class="innerShell">
            <left_navbar/>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import left_navbar from "/src/components/setUp_left_navbar.vue"
</script>

<style scoped>

    .shell{
        height: 100vh;
        width: 100vw;
    }

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
    
    .top-navbar>img{
        margin-left: 6px;
        height:56px;
    }

    .innerShell{
        display: flex;
    }

</style>