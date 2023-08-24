<template>
    <div class="homePage">
        <top_navbar/>
        <div class="main_area">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import top_navbar from '/src/components/top_navbar.vue';
</script>

<style>
    
    .homePage{
        width: 100%;
        min-width: 790px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        overflow-x: auto; /* 启用水平滚动 */
    }


</style>