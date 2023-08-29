<template>
        <div class="shell">
            <div class="inner_shell">
                <div 
                    v-for="parentNavbar,parentIndex in navbar" 
                    :key="parentNavbar.navbarName"
                    class="parentNavbar"
                >
                    <div class="divider" v-if="parentIndex"></div>
                    <div class="condition">
                        <div class="label">{{ parentNavbar.navbarName.split(" ")[0] }}</div>
                        <div class="parentNavbarName">{{ parentNavbar.navbarName.split(" ")[1] }}:</div>
                        <div class="childNavbarBox">
                            <div 
                                v-for="childNavbar,childIndex in parentNavbar.navbar" 
                                :key="childNavbar.navbarName "
                                class="childNavbar"
                                :class="top_navbar.has(childNavbar)?'included':''"
                                @click="navbar_choose(childNavbar)"
                            >{{ childNavbar.navbarName }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { useMapState } from '/src/hooks/useMapState'
    import { useStore } from "vuex"
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();
    const { top_navbar } = useMapState('homePage', ['top_navbar',]);
    let navbar = reactive([
        {navbarName:'M1 组织环境',navbar:[
            {navbarName:'认证模板',nextRoute:'nextRoute'},
        ]},
        {navbarName:'S4 人力资源',navbar:[
            {navbarName:'出差时间汇总',nextRoute:'nextRoute'},
            {navbarName:'加班调休时间汇总',nextRoute:'nextRoute'},
            {navbarName:'员工档案',nextRoute:'nextRoute'},
            {navbarName:'工资明细',nextRoute:'nextRoute'},
            {navbarName:'工资汇总表',nextRoute:'nextRoute'},
            {navbarName:'快递收发登记',nextRoute:'nextRoute'},
            {navbarName:'每日工作汇报表',nextRoute:'nextRoute'},
            {navbarName:'简历中心',nextRoute:'profileHub'},
            {navbarName:'解除劳动合同证明书',nextRoute:'nextRoute'},
            {navbarName:'请假调休加班外出单',nextRoute:'nextRoute'},
            {navbarName:'贡献值',nextRoute:'nextRoute'},
        ]},
        {navbarName:'X20 财务管理',navbar:[
            {navbarName:'奖罚记录',nextRoute:'nextRoute'},
        ]},
        {navbarName:'Y21 系统设定',navbar:[
            {navbarName:'云账户',nextRoute:'nextRoute'},
            {navbarName:'职位管理',nextRoute:'nextRoute'},
            {navbarName:'上传文件管理',nextRoute:'nextRoute'},
            {navbarName:'交流记录',nextRoute:'nextRoute'},
            {navbarName:'分类设定',nextRoute:'nextRoute'},
            {navbarName:'用户登录记录',nextRoute:'nextRoute'},
            {navbarName:'质量记录清单',nextRoute:'nextRoute'},
        ]},
        {navbarName:'C4 售后服务',navbar:[
            {navbarName:'合同项目跟踪记录',nextRoute:'nextRoute'},
            {navbarName:'客户证书管理',nextRoute:'nextRoute'},
        ]},
        {navbarName:'S6 外部提供',navbar:[
            {navbarName:'合作伙伴',nextRoute:'nextRoute'},
            {navbarName:'合格供方名录 ',nextRoute:'nextRoute'},
            {navbarName:'招聘供应商',nextRoute:'nextRoute'},
        ]},
        {navbarName:'C1 产品要求',navbar:[
            {navbarName:'合同评审记录表',nextRoute:'nextRoute'},
            {navbarName:'质量协议',nextRoute:'nextRoute'},
            {navbarName:'顾客合同',nextRoute:'nextRoute'},
            {navbarName:'顾客特殊要求清单',nextRoute:'nextRoute'},
        ]},
        {navbarName:'C2 设计开发',navbar:[
            {navbarName:'APQP',nextRoute:'nextRoute'},
        ]},
        {navbarName:'M6 改进',navbar:[
            {navbarName:'系统改进',nextRoute:'nextRoute'},
        ]},
        {navbarName:'Z OA办公',navbar:[
            {navbarName:'工作计划',nextRoute:'nextRoute'},
            {navbarName:'常用网址',nextRoute:'nextRoute'},
            {navbarName:'政策法规',nextRoute:'nextRoute'},
            {navbarName:'文件自动化',nextRoute:'nextRoute'},
            {navbarName:'文控中心',nextRoute:'nextRoute'},
        ]},
        {navbarName:'C0 销售相关',navbar:[
            {navbarName:'CCC费用查询',nextRoute:'nextRoute'},
            {navbarName:'产品清单',nextRoute:'nextRoute'},
            {navbarName:'服务流程单',nextRoute:'nextRoute'},
            {navbarName:'顾客档案表',nextRoute:'nextRoute'},
            {navbarName:'顾客财产清单',nextRoute:'nextRoute'},
        ]},
    ])
    function navbar_choose(childNavbar){
        let nextRoute = childNavbar.nextRoute
        if(nextRoute !== 'nextRoute'){
            store.dispatch('homePage/addTop_navbar',childNavbar)
            router.push({ name: childNavbar.nextRoute })
        }
    }
</script>

<style scoped>

    .shell{
        width: 100%;;

        font-size: 14px;
        line-height: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .inner_shell{
        margin:0 20px;
        margin-top: 30px;
        padding: 0px 20px;
        border: 1px solid #dcdfe6;
    }

    .parentNavbar{ 
        width: 100%;
        max-width: 1700px;
        height: auto;
        display: flex;
        flex-direction: column;
        
        overflow: hidden;
    }
    
    .divider {
        width: 100%;
        height: 1px;
        border-top: 1px dashed #dcdfe6;
    }

    .condition{
        display: flex;
        margin-bottom:10px;
    }

    .label{
        width: 35px;
        height: 30px;
        margin-left: 5px;
        margin-top: 10px;
        text-align: right;
        white-space: nowrap;
        color: #909399;
    }

    .parentNavbarName{
        width: 80px;
        padding-right: 10px;
        margin-right: 30px;
        margin-top: 10px;
        height: 30px;
        text-align: right;
        white-space: nowrap;
        color: #909399;
    }

    .childNavbarBox{
        width: auto;
        flex:1;
        display: flex;
        flex-wrap: wrap;
        background-color: #FFF;
    }

    .included{
        background-color: #3473e6;
        color: #FFF;
    }

    .childNavbar{
        height: 30px;
        padding: 0px 10px;
        margin: 0 5px;
        margin-top: 10px;

        text-align: left;
        white-space: nowrap;
        border-radius: 2px;
    }
    
    .childNavbar:hover{
        background-color: #3473e6;
        color: #FFF;
    }

</style>