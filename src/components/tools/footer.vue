<template>
    <div id="footerVue">
        <p>
            Powered by
            <a href="https://github.com/YangMengHeng/HXOJ"
            target="_blank"
            style="text-decoration: none;color:#ffd04b;">YangMengHeng
            </a>
            <span>&nbsp; Version: 1.1.1&nbsp;&nbsp; Docs:&nbsp;&nbsp;</span>
            <a href="https://docs.lpoj.cn"
            target="_blank"
            style="text-decoration: none;color:#ffd04b;">HXOJ Docs
            </a>
        </p>
    </div>
</template>

<script>
export default{
    name: 'Footer',
    setup(){

    }
}
</script>

<style>
    #footerVue{
        width: 100%;
        position: absolute;
        display: block;
        text-align: center;
    }
</style>