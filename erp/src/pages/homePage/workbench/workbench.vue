<template>
    <div class="homePage">
        <top_navbar/>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import top_navbar from '/src/components/top_navbar.vue';
</script>

<style>
    
    .homePage{
        width: calc(100% - 78px);
        min-width: 800px;
        display: flex;
        flex-direction: column;
    }

</style>