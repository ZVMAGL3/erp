import axios from 'axios';
export default {
    namespaced: true,
    //数据存储
    state: () => ({
        loginState:false,
    }),
    mutations:{
        //替换元素
        replaceAll(state,array){
            state[array[0]] = array[1]
        }
    },
    actions:{
        async initialization(context) {
            //获取本地用户的账号信息和哈希
            const identification = localStorage.getItem('identification');
            const identityHash = localStorage.getItem('identityHash');
            //判断本地是否存储着登录信息
            if (identification && identityHash) {
                try {
                    const response = await axios.post('http://localhost:1023/app.php', {
                        identification,
                        identityHash
                    });
                    console.log(response.data)
                    if (response.data.isLonggedIn) {
                        context.commit('replaceAll', ['loginState', true]);
                        return true;
                    } else {
                        console.log('登录失败');
                        localStorage.removeItem('identification');
                        localStorage.removeItem('identityHash');
                    }
                } catch (error) {
                    console.log('Error:', error);
                }
            }

            return false;
        },
        sign_in(context,userinfo){

        },
        sign_up(context,userinfo){

        }
    },
}