<template>
    <van-sticky :offset-top="0">
        <el-menu
        id="nav"
        :default-active="$route.path"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        >
            <el-menu-item index="/" id="OJName">
                <van-image width="50" height="50" :src="this.publicPath + 'webLogo.png'" v-show="$route.path != '/'"></van-image>
                <van-image width="50" height="50" :src="this.publicPath + 'webLogo_active.png'" v-show="$route.path === '/'"></van-image>
                &nbsp;&nbsp;HXOJ
            </el-menu-item>
            <el-menu-item index="/Course">
                <van-icon name="wap-home"></van-icon>&nbsp;Course
            </el-menu-item>
            <el-menu-item index="/Issue">
                <van-icon name="star"></van-icon>&nbsp;Issue
            </el-menu-item>
            <el-menu-item index="/Contest">
                <van-icon name="bell"></van-icon>&nbsp;Contest
            </el-menu-item>
            <el-menu-item index="/Rank">
                <van-icon name="medal"></van-icon>&nbsp;Rank
            </el-menu-item>

            <el-button round id="button" @click="isLogin = !isLogin">Login</el-button>
            <el-button round id="button" @click="isRegister = !isRegister">Register</el-button>

            <register v-if="isRegister"></register>
            <login v-if="isLogin"></login>
            <!-- <el-sub-menu index="2">
                <template #title><van-icon name="star-o"></van-icon>&nbsp;Course</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu> -->
        </el-menu>
    </van-sticky>
    <van-divider :style="{ borderColor: '#888888',padding: '0px', margin: '3px' }">HXOJ</van-divider>

    <router-view id="route" v-slot="{ Component }">
        <transition name="el-fade-in-linear"
                mode="out-in">
                <component :is="Component" />
        </transition>
    </router-view>

    <div class="footer">
      <p>
        Powered by
        <a href="https://github.com/Linzecong/LPOJ"
           target="_blank"
           style="text-decoration: none;color:#409EFF;">Linzecong</a>
        <span>
          &nbsp; Version: 3.4&nbsp;&nbsp; Docs:&nbsp;&nbsp;
          <a href="https://docs.lpoj.cn"
             target="_blank"
             style="text-decoration: none;color:#409EFF;">LPOJ Docs</a>&nbsp;&nbsp;欢迎加入LPOJ讨论群: 875136693&nbsp;&nbsp;
          <a target="_blank"
             href="//shang.qq.com/wpa/qunwpa?idkey=dcc9d5c63a744d5c09eda5dd7f4b208451e66b42ba633ea23ec6fa4d49135825">
            <img border="0"
                 src="//pub.idqqimg.com/wpa/images/group.png"
                 alt="LPOJ讨论群"
                 title="LPOJ讨论群">
          </a>
        </span>
      </p>
    </div>
</template>

<script>
import { ref, provide, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import register from '@/components/register/register.vue';
import login from '@/components/login/login.vue';

export default{
    name: 'app',
    setup(){
        const publicPath = process.env.BASE_URL;
        const route = useRoute();
        const activeIndex = ref('1');
        const isLogin = ref(false);
        const isRegister = ref(false);
        let windowWidth = ref(document.body.clientWidth);
        let windowHeight = ref(document.body.clientHeight);

        // #region provide_login
        provide('isLogin', isLogin);
        provide('isRegister', isRegister);
        provide('wwidth', windowWidth);
        provide('wheight', windowHeight);
        // #endregion

        onMounted(() => {

        })

        return {publicPath, activeIndex, route, isRegister, isLogin};
    },
    components: {
        register,
        login,
    }
}
</script>

<style>
    body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: url('../public/backgroundImage.gif') no-repeat;
        background-size: cover;
    }

    #nav{
        margin: 5px 5px 5px 5px;
        left: 0px;
        top: 0px;
        z-index: 5;
        box-shadow: 2px 2px 5px #888888;
    }

    #OJName{ font-size: 20px; }

    #button {
        float: right;
        margin: 12px;
        position: relative;
        display: block;
    }

    .indexLogo{
        content: url('../public/webLogo.png');
        width: 50px;
        height: 50px;
    }

    #route{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>