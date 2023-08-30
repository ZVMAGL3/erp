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
        {name:'标准',           nextRoute:'regulation',     icon:'tdesign:system-regulation'},
        {name:'集团',           nextRoute:'group',          icon:'mingcute:department-line'},
        {name:'部门、职位',     nextRoute:'assignment',     icon:'material-symbols:assignment-ind-outline'},
        {name:'职位工资设定',   nextRoute:'management',     icon:'fluent-mdl2:account-management'},
        {name:'岗位任命',       nextRoute:'appointment',    icon:'icon-park-outline:appointment'},
        {name:'记录清单',       nextRoute:'checklist',      icon:'solar:checklist-minimalistic-broken'},
        {name:'职责权限',       nextRoute:'permission',     icon:'solar:checklist-minimalistic-broken'},
        {name:'利益分配',       nextRoute:'portion',        icon:'icon-park-outline:chart-proportion'},
        {name:'云账户',         nextRoute:'virtual',        icon:'carbon:virtual-desktop'},
        {name:'数据检查',       nextRoute:'dataCheck',      icon:'material-symbols:data-check'},
        {name:'系统',           nextRoute:'settings',       icon:'mingcute:settings-2-line'},
        {name:'密码',           nextRoute:'key',            icon:'solar:key-broken'},
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