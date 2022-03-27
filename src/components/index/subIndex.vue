<template>
    <div id="subIndexVue">
        <van-config-provider :theme-vars="tabStyle">
            <van-tabs animated
                background="#545c64"
                color="#ffd04b"
                line-width="60px"
                duration="1"
                title-inactive-color="white"
                title-active-color="#ffd04b">
                    <van-tab title="为什么让孩子学编程?"
                    class="tabPadding">
                        <van-row :gutter="4" justify="center">
                            <van-col span="8">
                                <MyCard
                                :imageUrl=showText[0][0]
                                :title=showText[0][1]
                                :showText=showText[0][2]
                                ></MyCard>
                            </van-col>
                            <van-col span="8">
                                <MyCard
                                :imageUrl=showText[1][0]
                                :title=showText[1][1]
                                :showText=showText[1][2]
                                ></MyCard>
                            </van-col>
                            <van-col span="8">
                                <MyCard
                                :imageUrl=showText[2][0]
                                :title=showText[2][1]
                                :showText=showText[2][2]
                                ></MyCard>
                            </van-col>
                        </van-row>
                    </van-tab>
                    <van-tab title="孩子编程语言怎么选?"
                    class="tabPadding">
                        <van-row :gutter="6" justify="center">
                            <van-col span="8"><MyCard></MyCard></van-col>
                            <van-col span="8"><MyCard></MyCard></van-col>
                            <van-col span="8"><MyCard></MyCard></van-col>
                        </van-row>
                    </van-tab>
                    <van-tab title="为什么要选HXOJ平台学编程?" class="tabPadding">
                        <van-row :gutter="0" justify="center">
                            <van-col span="8"><MyCard></MyCard></van-col>
                            <van-col span="8"><MyCard></MyCard></van-col>
                            <van-col span="8"><MyCard></MyCard></van-col>
                        </van-row>
                    </van-tab>
                </van-tabs>
            </van-config-provider>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import MyCard from '../tools/myCard.vue';

export default{
    name: 'SubIndex',
    setup(){
        const publicPath = process.env.BASE_URL;
        const showText = ref([
            ['subIndex_1.png',
            '锻炼核心思维能力',
            '抓住窗口期,\n用编程有效锻炼孩子\n六大核心思维能力，助力理科',
            ],
            ['subIndex_2.png',
            '提升升学竞争力',
            '编程进入中小学必修课、\n高考强基计划,\n科技特长生助力升学'
            ],
            ['subIndex_3.png',
            '人工智能时代必备技能',
            '引导孩子探究前沿科技领域,\n打开科技视野,\n提升科技素养助力未来竞争力'
            ],
        ])
        const tabStyle = {
            tabFontSize: '20px',
            tabLineHeight: '40px'
        }

        onMounted(() => {

        })

        return {publicPath, showText, tabStyle}
    },
    components: {MyCard},
}
</script>

<style>
    .tabPadding{
        padding-top: 5px;
        white-space: pre-wrap;
    }

    #subIndexVue{
        box-shadow: 4px 4px 8px #888888;
        border-color: blue;
        border-radius: 10px;
    }
</style>