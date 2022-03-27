<template>
    <div id="subIndexVue">
        <van-tabs animated
            background="#545c64"
            color="#ffd04b"
            line-width="60px"
            duration="1"
            title-inactive-color="black"
            title-active-color="#ffd04b">
                <van-tab title="为什么让孩子学编程?">
                    <van-row :gutter="6" justify="center">
                        <van-col span="5"><MyCard></MyCard></van-col>
                        <van-col span="5"><MyCard></MyCard></van-col>
                        <van-col span="5"><MyCard></MyCard></van-col>
                    </van-row>
                </van-tab>
                <van-tab title="孩子编程语言怎么选?">
                    <van-row :gutter="6" justify="center">
                        <van-col span="5"><MyCard></MyCard></van-col>
                        <van-col span="5"><MyCard></MyCard></van-col>
                        <van-col span="5"><MyCard></MyCard></van-col>
                    </van-row>
                </van-tab>
                <van-tab title="为什么要选HXOJ平台学编程?">
                    <van-row :gutter="6" justify="center">
                        <van-col span="5"><MyCard></MyCard></van-col>
                        <van-col span="5"><MyCard></MyCard></van-col>
                        <van-col span="5"><MyCard></MyCard></van-col>
                    </van-row>
                </van-tab>
            </van-tabs>
    </div>
</template>

<script>
import MyCard from '../tools/myCard.vue';

export default{
    name: 'SubIndex',
    setup(){

    },
    components: {MyCard},
}
</script>

<style>

</style>