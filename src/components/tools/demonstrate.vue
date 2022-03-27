<template>
    <div class="demonstrateVue">
        <video autoplay loop muted class="Demo">
            <source
            :src="this.publicPath + 'video/indexVideo.mp4'"
            type="video/mp4">
        </video>
    </div>
</template>

<script>
import { computed, inject, onMounted } from '@vue/runtime-core';
export default{
    name: 'Demonstrate',
    setup(){
        const publicPath = process.env.BASE_URL;
        const windowWidth = inject('wwidth');
        const windowHeight = inject('wheight');
        const videoWidth = computed(() => windowWidth.value - 200)

        onMounted(() => {
            console.log(videoWidth)
        })

        return {publicPath, windowWidth, windowHeight, videoWidth}
    }
}
</script>

<style>
    .demonstrateVue{
        height: v-bind(windowHeight)px;
        width: v-bind(windowWidth)px;
        display: block;
        text-align: center;
        position: relative;
        z-index: 5;
    }

    .Demo{
        width: v-bind(videoWidth);
        border-radius: 10px;
        object-fit: fill;
        position: relative;
    }
</style>