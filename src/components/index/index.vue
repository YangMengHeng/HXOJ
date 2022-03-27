<template>
    <div id="indexVue">
        <div class="demonstrate">
            <video autoplay loop muted class="Demo">
            <source
            :src="this.publicPath + 'video/indexVideo.mp4'"
            type="video/mp4">
            </video>
        </div>
        <div id="videoTextDiv">
                <span class="videoTextLogo">HXOJ</span><br/>
                <span class="videoTextCss" ref="typing"></span><br/>
        </div>

        <van-divider :style="{ borderColor: '#888888',padding: '0px', margin: '3px' }">HXOJ</van-divider>

        <div id="tabPage">
            <SubIndex></SubIndex>
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';
import SubIndex from './subIndex.vue';

export default{
    name: 'index',
    setup(){
        const publicPath = process.env.BASE_URL;
        const videoText = ref([
            '用编程玩懂数学\n让孩子用运算发现生活中的秘密',
            '用编程对话人工智能\n让孩子探索宇宙的奥妙',
            '用编程链接宇宙\n让孩子在此刻知晓未来',
            '用编程赋能艺术\n女孩也能玩代码，用科技让绘画更动人',
            '用编程表达创意\n让孩子爱上动手设计，不再沉迷游戏',
            '用编程激发创造力\n脑洞大开，随处都是孩子的实验基地',
            '用编程\n让孩子无所不能']);
        let showIndex = ref(0);
        let typing = ref(null);
        let i = 1;

        let timer = setInterval(() => {
            if(showIndex.value < 6){
                showIndex.value += 1;
            }
            else if(showIndex.value >= 6){
                showIndex.value = 0;
                typing.value.innerText = '';
            }
            i = 1;
        }, 6000);
        let typeTimer = setInterval(() => {
            if(i <= videoText.value[showIndex.value].length){
                typing.value.innerText = videoText.value[showIndex.value].slice(0, i++);
            }
        }, 175);

        onUnmounted(() => {
            clearInterval(timer);
            clearInterval(typeTimer);
        })

        return {publicPath, videoText, showIndex, timer, typeTimer, typing}
    },
    components: {SubIndex},
}
</script>

<style>
    :root{
        --videoTextSize: 38px;
        --cursorSize: 4px;
        --videoTextDuration: 3s;
    }

    /* 光标闪烁动画 */
    @keyframes blink {
        0% {
            background-color: #545c64;
        }
        50% {
            background-color: transparent;
        }
        100% {
            background-color: #545c64;
        }
    }

    .demonstrate{
        height: 100%;
        width: 100%;
        display: block;
        text-align: center;
        position: relative;
        opacity: 0.8;
        z-index: 1;
    }

    .Demo{
        box-shadow: 2px 2px 5px #888888;
        border-radius: 10px;
    }

    #videoTextDiv{
        top: 35%;
        left: 30%;
        color: #ffd04b;
        z-index: 5;
        float: left;
        position: absolute;
        display: block;
        line-height: 1;
        font-family: 'Courier New', Courier, monospace;
    }

    .videoTextCss::after{
        content: '';
        width: var(--cursorSize);
        height: var(--videoTextSize);
        background-color: #545c64;
        z-index: 5;
        position: absolute;
        animation-name: blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    .videoTextCss{
        white-space: pre-wrap;
        font-size: var(--videoTextSize);
    }

    .videoTextLogo{
        font-size: 34px;
    }

    #tabPage{
        background-color: black;
        width: 80%;
        height: 400px;
        margin-left: 10%;
        box-shadow: 2px 2px 5px #888888;
    }
</style>