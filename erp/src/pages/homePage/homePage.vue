<template>
    <div class="container">
        <left_navbar/>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import left_navbar from "/src/components/homePage_left_navbar.vue"
</script>

<style scoped>

    .container{
        height: 100vh;
        width: 100vw;
        min-height: 600px;
        display: flex;
    }  

</style>
