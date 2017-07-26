<template>
    <div class="login_content">
        <div class="center_btn">
            <router-link :to="{path:'/mobile'}" class="mobile_login">手机号登陆</router-link>
            <router-link :to="{path:'/register'}" class="register">注册</router-link>
        </div>
        <div class="other">
            <divider>其他快捷登录方式</divider>
            <div class="other_row">
                <div class="other_btn">
                    <img src="../../../static/img/icon/qq@2x.png" alt="">
                    <img src="../../../static/img/icon/weibo@2x.png" alt="">
                    <img src="../../../static/img/icon/weixin@2x.png" alt="">
                </div>
            </div>
    
        </div>
    </div>
</template>
<script>
import {
    Divider
} from 'vux'
import getid from '../../assets/js/getQQid.js'
export default {
    components: {
        Divider

    },
    mounted() {
        // this.getacsstoken()
    },
    methods: {
        getacsstoken() {
            var location = 'https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=1106258194&redirect_uri=120.77.43.178:8088/api/oauth'
            window.location.href = location;
            // axios.get('https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=1106258194&redirect_uri=www.baidu.com').then((res) => {
            //     if (res.data.code == 0) { //微信登录成功跳转个人中心
            //         console.log('ok')
            //     } else { //微信登录失败，使用填写信息登录
            //         console.log('o')

            //     }
            // })
        }
    }
}
</script>
<style>
.login_content {
    flex-grow: 4;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.center_btn {
    flex-grow: 5;
}

.center_btn a {
    display: block;
    width: 90%;
    margin: 0 auto;
    line-height: 45px;
    text-align: center;
    height: 45px;
    border: 1px solid #2E2C2F;
    border-radius: 23px;
    margin-bottom: 12px;
    font-size: 17px;
    color: #2E2C2F;
}

.center_btn a:first-child {
    background-color: #2E2C2F;
    color: #fff;
}

.other {
    flex-grow: 3;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.other_row {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.other_btn {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    margin-top: 20px;
    /* 注意 */
}

.other_btn img {
    width: 42px;
    height: 42px;
    margin: 0 20px;
}
</style>