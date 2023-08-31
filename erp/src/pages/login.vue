<template>
    <div class="shell">
        <div class="innerShell">
            <div class="container a-container" :class="LogIn?'is-txl':''" id="a-container">
                <div action="" method="" class="box" id="a-box">
                    <h2 class="box_title title">创建账号</h2>
                    <div class="box_icons">
                    </div>
                    <!-- <span class="box_span">注册</span> -->
                    <div v-for="element,index in property" :key="index" class="input-group">
                        <div v-if="complianceFunctions[index].value && (focusRecording[index] || loggedIn)" class="box_span">{{ element.Prompt }}</div>
                        <input :type="element.type" @blur="handleBlur(index)" class="box_input" :placeholder="element.placeholder" v-model="register_text[index]">
                    </div>
                    <button class="box_button button submit" @click="sign_up">SIGN UP</button>
                </div>
            </div>

            <div class="container b-container" :class="(LogIn?'is-txl':'') + (LogIn?' is-z':'')" id="b-container">
                <div action="" method="" class="box" id="b-box">
                    <h2 class="box_title title">登入账号</h2>
                    <div class="box_icons">
                    </div>
                    <!-- <span class="box_span">登录</span> -->
                    <input type="text" class="box_input" placeholder="Mobile" v-model="mobile">
                    <input type="password" class="box_input" placeholder="Password" v-model="password">
                    <a class="box_link">忘记密码？</a>
                    <button class="box_button button submit" @click="sign_in">SIGN IN</button>
                </div>
            </div>

            <div class="switch" :class="(LogIn?'is-txr':'') + (is_gx?' is-gx':'')" id="switch-cnt">
                <div class="switch_circle" :class="!LogIn?'is-txr':''"></div>
                <div class="switch_circle switch_circle-t" :class="!LogIn?'is-txr':''"></div>
                
                <div class="switch_container" :class="LogIn?'is-hidden':''" id="switch-c1">
                    <h2 class="switch_title title" style="letter-spacing: 0;">Welcome Back!</h2>
                    <p class="switch_description description">已经有账号了嘛，去登入账号来进入奇妙世界吧！！！</p>
                    <button class="switch_button button switch-btn" @click="changeBox">SIGN IN</button>
                </div>

                <div class="switch_container" :class="!LogIn?'is-hidden':''" id="switch-c2">
                    <h2 class="switch_title title" style="letter-spacing: 0;">Hello Friend!</h2>
                    <p class="switch_description description">去注册一个账号，成为尊贵的会员，让我们踏入奇妙的旅途！</p>
                    <button class="switch_button button switch-btn" @click="changeBox">SIGN UP</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref,reactive,computed } from 'vue';
    import { useStore } from "vuex"
    import md5 from "blueimp-md5";
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();
    //样式调整
    let LogIn = ref(true)

    let is_gx = ref(false)
    
    function changeBox(){
        if(!is_gx.value){
            is_gx.value = true
            LogIn.value=!LogIn.value
            setTimeout(function () {
                is_gx.value = !is_gx.value
            }, 1000)
        }
    }

    //表单数据
    let mobile = ref('') //用户手机号
    let password = ref('') //用户密码
    let register_text= reactive( //注册
        ['']
    )
    let focusRecording = reactive([false,false,false,false]) //记录是否显示不合规

    function handleBlur(index){ //显示不合规
        focusRecording[index] = true
    }

    let loggedIn = ref(false) //默认显示不合规

    let complianceFunctions = [
        computed(() => !RegExpression_s(register_text[0], 0)),
        computed(() => !RegExpression_s(register_text[1], 1)),
        computed(() => !RegExpression_s(register_text[2], 2)),
        computed(() => !(register_text[2] === register_text[3]))
    ]

    let property = [
        
        {
            Prompt:'* 请输入用户名,第一个不能为数字',
            placeholder:'Name',
            type:'text'
        },
        {
            Prompt:'* 请输入正确的手机号',
            placeholder:'Mobile',
            type:'text'
        },
        {
            Prompt:'* 8-12位,需包含数字、大写字母、小写字母和特殊符号(@$!%*?&~)',
            placeholder:'Password',
            type:'password'
        },
        {
            Prompt:'* 确认密码必须和设置的密码一致',
            placeholder:'Confirm Password',
            type:'password'
        },
    ]

    function RegExpression_s(val,i){//正则表达式
        let array = [
            /^(?![0-9])(?!.*[?!@&|/])[^\s]{1,16}$/, //不为以数字开头
            /^(\+\d{2,3}\-)?\d{11}$/, //手机号
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~])[A-Za-z\d@$!%*?&~]{8,}$/,   //password
        ];
        return array[i].test(val)
    }

    function sign_in(){
        if(!(mobile.value === '' || password.value === '')){
            store.dispatch('login/sign_in',{mobile:mobile.value,identityHash:md5(password.value)}).then(result =>{
                if(result){
                    const routeRecord = localStorage.getItem('routeRecord');
                    router.push({ name: routeRecord?routeRecord:'homePage' })
                }else{
                    alert('账号或密码错误！')
                }
            })
        }else{
            alert('请输入账号和密码！')
        }
        // console.log(complianceFunctions)
    }

    function sign_up(){
        if(complianceFunctions.every(item => item.value === false)){
            store.dispatch('login/sign_up',register_text).then(result =>{
                if(result){
                    router.push({ name: 'homePage' })
                }
            })
        }else{
            alert('请完整填写数据')
        }
        loggedIn.value = true
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* 字体无法选中 */
        user-select: none;
    }

    .shell {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ecf0f3;
        color: #a0a5a8;
    }
    
    .innerShell{
        position: relative;

        height: 600px;
        width: 1000px;
        min-width: 1000px;
        min-height: 600px;
        padding: 25px;

        background-color: #ecf0f3;
        box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
        border-radius: 12px;

        overflow: hidden;

    }

    /* 设置响应式 */
    @media (max-width: 1200px) {
        .innerShell {
            transform: scale(0.7);
        }
    }

    @media (max-width: 1000px) {
        .innerShell {
            transform: scale(0.6);
        }
    }

    @media (max-width: 800px) {
        .innerShell {
            transform: scale(0.5);
        }
    }

    @media (max-width: 600px) {
        .innerShell {
            transform: scale(0.4);
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        width: 600px;
        height: 100%;
        padding: 25px;
        background-color: #ecf0f3;
        transition: 1.25s;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .box_title{
        margin-bottom: 10px;
    }

    .input-group{
        display: flex;
        flex-direction: column; /* 将子元素垂直排列 */
        align-items: flex-start; /* 左对齐子元素 */
        margin-bottom: 10px;
    }

    .iconfont {
        margin: 0 5px;
        border: rgba(0, 0, 0, 0.5) 2px solid;
        border-radius: 50%;
        font-size: 25px;
        padding: 3px;
        opacity: 0.5;
        transition: 0.1s;
    }

    .iconfont:hover {
        opacity: 1;
        transition: 0.15s;
        cursor: pointer;
    }

    .box_input {
        width: 350px;
        height: 40px;
        margin: 4px 0;
        padding-left: 25px;
        font-size: 13px;
        letter-spacing: 0.15px;
        border: none;
        outline: none;
        background-color: #ecf0f3;
        transition: 0.25s ease;
        border-radius: 8px;
        box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
    }

    .box_input:focus {
        box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
    }

    .box_span {
        margin-left: 20px;
        color:red;
        width: 220px;
         text-align: left;
    }

    .box_link {
        color: #181818;
        font-size: 15px;
        margin-top: 25px;
        border-bottom: 1px solid #a0a5a8;
        line-height: 2;
    }

    .title {
        font-size: 34px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
        letter-spacing: 10px;
    }

    .description {
        font-size: 14px;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 1.6;
    }

    .button {
        width: 180px;
        height: 50px;
        border-radius: 25px;
        margin-top: 50px;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1.15px;
        background-color: #4B70E2;
        color: #f9f9f9;
        box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
        border: none;
        outline: none;
    }

    .a-container {
        z-index: 100;
        left: calc(100% - 600px);
    }

    .b-container {
        left: calc(100% - 600px);
        z-index: 0;
    }

    .switch {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 400px;
        padding: 50px;
        z-index: 200;
        transition: 1.25s;
        background-color: #ecf0f3;
        overflow: hidden;
        box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
    }

    .switch_circle {
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: #ecf0f3;
        box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
        bottom: -60%;
        left: -60%;
        transition: 1.25s;
    }

    .switch_circle-t {
        top: -30%;
        left: 60%;
        width: 300px;
        height: 300px;
    }

    .switch_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        width: 400px;
        padding: 50px 55px;
        transition: 1.25s;
    }

    .switch_button {
        cursor: pointer;
    }

    .switch_button:hover,
    .submit:hover {
        box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
        transform: scale(0.985);
        transition: 0.25s;
    }

    .switch_button:active,
    .switch_button:focus {
        box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
        transform: scale(0.97);
        transition: 0.25s;
    }

    .is-txr {
        left: calc(100% - 400px);
        transition: 1s;
        transform-origin: left;
    }

    .is-txl {
        left: 0;
        transition: 1s;
        transform-origin: right;
    }

    .is-z {
        z-index: 200;
        transition: 1s;
    }

    .is-hidden {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        transition: 1s;
    }

    .is-gx {
        animation: is-gx 1s;
    }

    @keyframes is-gx {

        0%,
        10%,
        100% {
            width: 400px;
        }

        30%,
        50% {
            width: 500px;
        }
    }
</style>