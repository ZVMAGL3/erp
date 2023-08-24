<template>
        <div class="shell">
            <div 
                v-for="parentNavbar,parentIndex in navbar" 
                :key="parentNavbar.navbarName"
                class="parentNavbar"
            >
                <div class="label">{{ parentNavbar.navbarName.split(" ")[0] }}</div>
                <div class="parentNavbarName">{{ parentNavbar.navbarName.split(" ")[1] }}</div>
                <div class="childNavbarBox">
                    <div 
                        v-for="childNavbar,childIndex in parentNavbar.navbar" 
                        :key="childNavbar.navbarName "
                        class="childNavbar"
                    >{{ childNavbar.navbarName }}</div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { reactive } from 'vue';

    let navbar =reactive([
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
            {navbarName:'简历中心',nextRoute:'nextRoute'},
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

</script>

<style>

    .shell{
        width: 100%;
        height: 100%;
        padding: 0 20px;
        padding-top: 30px;

        font-size: 16px;
        line-height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .parentNavbar{
        width: 100%;
        max-width: 1400px;
        height: auto;
        margin-bottom: 30px;
        display: flex;
        box-shadow: 2px 3px 18px rgba(0,0,0,0.18);
        border-radius: 18px 5px 3px 3px;
        background-color: #504FF0;
        overflow: hidden;
    }

    .label{
        width: 35px;
        height: 40px;
        margin-left: 5px;
        text-align: right;
        white-space: nowrap;
        color: #FFF;
    }

    .parentNavbarName{
        width: 80px;
        padding-right: 10px;
        height: 40px;
        text-align: right;
        white-space: nowrap;
        color: #FFF;
    }

    .childNavbarBox{
        width: auto;
        flex:1;
        display: flex;
        flex-wrap: wrap;
        background-color: #FFF;
    }

    .childNavbar{
        height: 40px;
        margin-right: 10px;
        margin-left: 5px;
        text-align: left;
        white-space: nowrap;
    }

</style>