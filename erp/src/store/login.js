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
            const mobile = localStorage.getItem('identification');
            const identityHash = localStorage.getItem('identityHash');
            //判断本地是否存储着登录信息
            if (mobile && identityHash) {
                try {
                    const url = 'http://localhost:1023/app.php/login'
                    const postInfo = {mobile,identityHash}
                    const response = await axios.post(url,postInfo);
                    if (response.data.isLonggedIn) {
                        context.commit('replaceAll', ['loginState', true]);

                        //缓存个人信息

                        return true;
                    } else {
                        // localStorage.removeItem('identification');
                        // localStorage.removeItem('identityHash');
                        console.error(response.data.error)
                    }

                } catch (error) {
                    console.error('异步操作错误:', error);
                    return false;

                }
            }

            return false;
        },
        async sign_in(context,userinfo){
            try {
                const url = 'http://localhost:1023/app.php/login'
                const response = await axios.post(url,userinfo);
                
                if (response.data.isLonggedIn) {
                    context.commit('replaceAll', ['loginState', true]);

                    //缓存个人信息
                    return true;
                } else {
                    console.log(response.data.error)
                }
            } catch {
                console.log('链接出错:'+error);
            }
            return false;
        },
        async sign_up(context,userinfo){
            try {
                const url = 'http://localhost:1023/app.php/register'
                const response = await axios.post(url,userinfo);
                
                if (response.data.isLonggedIn) {
                    context.commit('replaceAll', ['loginState', true]);

                    //缓存个人信息

                    return true;
                } else {
                    alert(response.data.error)
                }
            } catch {
                alert('链接出错:', error);
            }
            return false;
        }
    },
}