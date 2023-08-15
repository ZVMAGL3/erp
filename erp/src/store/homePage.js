import axios from 'axios';
export default {
    namespaced: true,
    //数据存储
    state: () => ({

    }),
    mutations:{
        //替换元素
        replaceAll(state,array){
            state[array[0]] = array[1]
        }
    },
    actions:{

    },
}