export default {
    namespaced: true,
    //数据存储
    state: () => ({
        loginState:false,
    }),
    mutations:{

    },
    actions:{
        initialization(context){
            console.log(context.state.loginState)
        }
    },
}