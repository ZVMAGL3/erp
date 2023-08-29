<template>
    <div class="left_navbar">
        <div class="placeholder"></div>
        <div 
            v-for="eve,index in left_navbarJOSN" 
            class="left_navbar_box"
            :class="navbar_index === index?'navbar_caches':''"
            @click="navbar(eve.nextRoute,index)"
        >
            <Icon :icon="eve.icon" style="font-size: 16px;margin-left:20px ;"/>
            <span style="font-size: 6px;">{{ eve.name }}</span>
        </div>
    </div>
</template>

<script setup>

    import { Icon } from '@iconify/vue';
    import { reactive, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    let left_navbarJOSN = reactive([
        {name:'公司',           nextRoute:'company',        icon:'mdi:company'},
        {name:'标准',           nextRoute:'regulation',    icon:'tdesign:system-regulation'},
        {name:'集团',           nextRoute:'group',          icon:'mingcute:department-line'},
        {name:'部门、职位',     nextRoute:'setUp',          icon:'solar:settings-line-duotone'},
        {name:'职位工资设定',   nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'岗位任命',       nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'记录清单',       nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'职责权限',       nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'利益分配',       nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'云账户',         nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'数据检查',       nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'系统',           nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'密码',           nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'返回',           nextRoute:'homePage',       icon:'typcn:arrow-back-outline'}
    ])
    
    let navbar_index = ref(0)

    function navbar(nextRoute,index){
        navbar_index.value = index<=3?index:navbar_index.value
        switch(nextRoute){
            // case 'official':
            //     window.open('http://www.sqp-cert.com', '_blank');
            //     break;
            // case 'login':
            //     localStorage.removeItem('identification');
            //     localStorage.removeItem('identityHash');
            default:
                console.log(nextRoute)
                router.push({ name: nextRoute });
        }
    }

</script>

<style scoped>  

    .left_navbar{
        width:140px;
        min-width:140px;
        height: 100vh;
        background: #333;
        color: #FFF;
        display: flex;
        flex-direction: column;
    }

    .placeholder{
        height: 30px;
    }

    .left_navbar>h2{
        width: 100%;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        border-bottom: 1px dotted #666;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .left_navbar_box{
        height: 25px;
        margin: 5px 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .left_navbar_box:hover{
        background-color: #666;
    }

    .navbar_caches{
        background-color: #666;
    }

</style>