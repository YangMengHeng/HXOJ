<template>
    <van-swipe>
        <van-swipe-item></van-swipe-item>
    </van-swipe>
</template>

<script>
import { ref } from 'vue'

export default{
    name: 'MySwipe',
    props:{
        fieldName: String,
        labelName: String,
        plhd: String,
        mxl: String,
        bindInfo: String,
        isRequired: Boolean,
    },
    setup(props){
        const bifo = ref(props.bindInfo)

        return { bifo }
    }
}
</script>