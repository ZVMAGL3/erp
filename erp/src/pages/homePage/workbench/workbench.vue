<template>
    <top_navbar/>
    <div class="main_area">
        <router-view></router-view>
    </div>
</template>

<script setup>
    import top_navbar from '/src/components/top_navbar.vue';
</script>

<style>
    
    .main_area{
        height: 100%;
        width: 100%;
    }

</style>