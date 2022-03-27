<template>
    <van-field
    :name=fieldName
    v-model="bifo"
    :label=labelName
    :placeholder="plhd"
    :maxlength=mxl
    show-word-limit
    clearable colon
    size="large"
    :required="isRequired"
    label-align="right"
    ></van-field>
</template>

<script>
import { ref } from 'vue'

export default{
    name: 'MyField',
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