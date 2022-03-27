<template>
    <div id="myCardVue">
        <el-card class="boxCard" shadow="always">
            <van-image :src="this.publicPath + imageUrl"></van-image>
            <p class="cardTitle">{{title}}</p>
            <p class="cardText">{{showText}}</p>
        </el-card>
    </div>
</template>

<script>
export default{
    name: 'MyCard',
    props:{
        imageUrl: String,
        showText: String,
        title: String,
    },
    setup(){
        const publicPath = process.env.BASE_URL;

        return {publicPath}
    }
}
</script>

<style>
    #myCardVue .el-card{
        --el-card-bg-color: #545c64;
        --el-card-border-color: null;
    }

    #myCardVue{
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .cardText{
        color: white;
        opacity: 0.8;
        font-size: 20px;
    }

    .cardTitle{
        color: white;
        font-size: 24px;
    }
</style>
