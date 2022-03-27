<template>
    <div id="loginVue">
        <van-popup class="zdex"
        v-model:show="show"
        closeable
        :style="{
            width: '30%',
            height: '35%'
        }"
        round
        close-icon="close"
        transition-appear
        >
        <h2 class="loginText">Login</h2>
        <div id="inputAccAndPwd">
            <van-cell-group inset>
                <div v-for="(item, index) in loginFormInfo" :key="index">
                    <MyField
                    :fieldName="item[0]"
                    :labelName="item[1]"
                    :plhd="item[2]"
                    :mxl="item[3]"
                    :bindInfo="item[4]"
                    :isRequired="item[5]">
                    </MyField>
                </div>
            </van-cell-group>
        </div>
        <div id="confirmAndCancel">
            <van-button round
            icon="success"
            color="linear-gradient(to right, #ffd04b, #545c64)"
            @click="clickLogin"
            >confirm</van-button>
        </div>
        </van-popup>
    </div>
</template>

<script>
import { inject, getCurrentInstance, ref } from 'vue'
import MyField from '../tools/myField.vue'

export default{
    name: 'Login',
    setup(){
        const show = inject('isLogin');
        const test = ref(null);
        const loginFormInfo = ref([
            ['UserAcc', 'Account', '至少6位大小写字母及数字构成的字符串', '8', '', true],
            ['UserPwd', 'Password', '至少6位大小写字母及数字构成的字符串', '12', '', true],
        ]);
        const { proxy } = getCurrentInstance();

        function clickLogin(){
            proxy.$axios.get("/getUser/user", test)
            .then((result) => {
                console.log(result, test)
            }).catch((err) => {
                console.log(err)
            });
        }

        return {show, loginFormInfo, clickLogin}
    },
    components: { MyField },
}
</script>

<style>
    #confirmAndCancel{
        margin-top: 5px;
        text-align: center;
    }

    .loginText{ text-align: center; }

    .zdex{ z-index: 99;}
</style>