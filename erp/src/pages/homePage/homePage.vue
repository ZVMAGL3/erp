<template>
    <div class="container">
        <left_navbar/>
        <div class="homePage">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import left_navbar from "/src/components/left_navbar.vue"
</script>

<style scoped>

    .container{
        height: 100vh;
        width: 100vw;
        min-height: 600px;
        display: flex;
    }  

    .homePage{
        width:100%;
        overflow: hidden;
        flex:1;
        
    }

</style>
