export default {
    namespaced: true,
    //数据存储
    state: () => ({
        top_navbar : new Set([]),
        navbar_index : {navbarName:'桌面',nextRoute:'desktop'},
    }),
    mutations:{
        //替换元素
        replaceAll(state,array){
            state[array[0]] = array[1]
        },
        addSet(state,array){
            state[array[0]].add(array[1])
        },
        deleteSet(state,array){
            state[array[0]].delete(array[1])
        },
    },
    actions:{
        addTop_navbar(context,childNavbar){
            context.commit('addSet',['top_navbar',childNavbar])
            context.commit('replaceAll',['navbar_index',childNavbar])
        }
    },
}