<template>
    <div class="hello">
        <div class="left">
            <p>一级路由</p>
            <p>main</p>
        </div>
        <div class="right">
            二级路由区域 --> 同时挂载两个
            <router-view class="sub-left"></router-view>
            <router-view class="sub-right" name="another-view"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'entry',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
    .hello {
        width: 100%;
        height: 100%;
    }
    .left {
        float: left;
        width: 250px;
        background-color: #0074D9;
        margin-bottom: -9999px;
        padding-bottom: 9999px;
    }
    .right {
        background-color: #bf616a;
        float: right;
        width: calc(100% - 250px);
        margin-bottom: -9999px;
        padding-bottom: 9999px;
    }
    .sub-left {
        margin-top: 10px;
        background-color: #fff;
    }
    .sub-right {
        margin-top: 10px;
        background-color: #b5d592;
    }
</style>
