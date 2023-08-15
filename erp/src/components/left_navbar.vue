<template>
    <div class="left-navbar">
        <div class="logo">
            <img src="images/logo.png" alt="">
        </div>
        <h2>S.Q.P</h2>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>  

    .left-navbar{
        width:78px;
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


</style>