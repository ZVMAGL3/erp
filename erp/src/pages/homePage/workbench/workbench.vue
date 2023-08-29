<template>
    <div class="homePage">
        <div class="outside">
            <top_navbar/>
            <div class="exhibit">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
    import top_navbar from '/src/components/homePage_top_navbar.vue';
</script>

<style scoped>
    
    .homePage{
        width: calc(100% - 78px);
        overflow-y: hidden; /* 隐藏水平滚动条 */
        overflow-x: auto; /* 显示垂直滚动条 */
    }
    
    .outside{
        width: 100%;
        min-width: 400px;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .exhibit{
        width: 100%;
        height: calc(100vh - 56px);
        overflow-x: hidden; /* 隐藏水平滚动条 */
        overflow-y: auto; /* 显示垂直滚动条 */
    }

</style>