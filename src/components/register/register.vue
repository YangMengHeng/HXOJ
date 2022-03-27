<template>
    <div id="registerVue">
        <van-popup class="zdex"
        v-model:show="show"
        closeable
        :style="{
            width: '30%',
            height: '90%',
        }"
        round
        close-icon="close"
        transition-appear
        >
            <h2 class="registerText">Register</h2>
            <div id="inputAccAndPwd">
                <van-cell-group inset>
                    <div v-for="(item, index) in registerFormInfo" :key="index">
                        <MyField
                        :fieldName="item[0]"
                        :labelName="item[1]"
                        :plhd="item[2]"
                        :mxl="item[3]"
                        :bindInfo="item[4]"
                        :isRequired="item[5]">
                        </MyField>
                    </div>
                    <div id="confirmAndCancel">
                        <van-button round
                        icon="success"
                        color="linear-gradient(to right, #ffd04b, #545c64)"
                        @click="clickRegister"
                        >confirm</van-button>
                    </div>
                </van-cell-group>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { inject, onMounted, onUnmounted, reactive, ref } from 'vue'
import MyField from '../tools/myField.vue'

export default{
    name: 'Register',
    setup(){
        const show = inject('isRegister');
        const registerInfo = reactive({
            id: '',
            userAcc: '',
            userPwd: '',
            userName: '',
            rating: 1200,
            introduce: '',
            school: '',
            class: '',
            tel: '',
            email: '',
            type: 1
        });
        const registerFormInfo = ref([
            ["UserAcc", "Account", "至少6位大小写字母及数字构成的字符串", "8", '', true],
            ["UserName", "Name", "请输入你的姓名", "6", '', true],
            ["UserPwd", "Password", "至少6位大小写字母及数字构成的字符串", "12", '', true],
            ["UserIntroduce", "Introduce", "一句简短的话介绍你自己", "8", '', true],
            ["UserSchool", "School", "请填写你目前就读的学校", "12", '', true],
            ["UserClass", "Class", "请填写你目前就读的班级", "12", '', true],
            ["UserTel", "Telephtone", "请填写你或父母的联系方式", "11", '', true],
            ["UserEmail", "Email", "请填写你的邮箱", "24", '', false],
        ])

        onMounted(() => {

        })

        onUnmounted(() => {
            
        })

        function clickRegister(){

        }

        return {show, registerInfo, registerFormInfo, clickRegister}
    },
    components: { MyField },
}
</script>

<style>
    #confirmAndCancel{
        margin-top: 5px;
        text-align: center;
    }

    .registerText{ text-align: center; }

    .zdex{ z-index: 999;}
</style>