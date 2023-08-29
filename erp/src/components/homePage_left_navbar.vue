<template>
    <div class="left-navbar">
        <div class="logo">
            <img src="images/logo.png" alt="">
        </div>
        <h2>S.Q.P</h2>
        <div 
            v-for="eve,index in left_navbarJOSN" 
            class="left_navbar_box"
            :class="navbar_index === index?'navbar_caches':''"
            @click="navbar(eve.nextRoute,index)"
        >
            <Icon :icon="eve.icon" style="font-size: 24px;"/>
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
        {name:'工作台',     nextRoute:'workbench',      icon:'fluent:desktop-mac-24-regular'},
        {name:'通讯录',     nextRoute:'contacts',       icon:'mingcute:contacts-fill'},
        {name:'聊天室',     nextRoute:'chatroom',       icon:'gridicons:chat'},
        {name:'设置',       nextRoute:'setUp',          icon:'solar:settings-line-duotone'},
        {name:'官网',       nextRoute:'official',       icon:'material-symbols:open-in-new-sharp'},
        {name:'退出',       nextRoute:'login',          icon:'gg:log-out'}
    ])
    
    let navbar_index = ref(0)

    function navbar(nextRoute,index){
        navbar_index.value = index<=3?index:navbar_index.value
        switch(nextRoute){
            case 'official':
                window.open('http://www.sqp-cert.com', '_blank');
                break;
            case 'login':
                localStorage.removeItem('identification');
                localStorage.removeItem('identityHash');
            default:
                router.push({ name: nextRoute });
        }
    }

</script>

<style scoped>  

    .left-navbar{
        width:78px;
        min-width:78px;
        height: 100vh;
        background: #333;
        color: #FFF;
        display: flex;
        flex-direction: column;
    }

    .logo{
        width: 100%;
        padding-top: 12px;
        text-align: center;
        vertical-align: bottom;
    }
    .logo>img{
        width: 53px;
        height: 53px;
        padding: 4px;
        border-radius: 8px;
        background: #CCC;
    }

    .left-navbar>h2{
        width: 100%;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        border-bottom: 1px dotted #666;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .left_navbar_box{
        height: 50px;
        margin: 5px 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .left_navbar_box:hover{
        background-color: #666;
    }

    .navbar_caches{
        background-color: #666;
    }

</style>