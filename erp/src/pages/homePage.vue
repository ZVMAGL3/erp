<template>
    <div class="container">
        <left_navbar/>
        <div class="homePage">
            <top_navbar/>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
    import left_navbar from "/src/components/left_navbar.vue"
    import top_navbar from "/src/components/top_navbar.vue"
</script>

<style scoped>

    .container{
        height: 100vh;
        width: 100vw;
        min-height: 600px;
        display: flex;
    }  

    .homePage{
        width:100%
    }

</style>
