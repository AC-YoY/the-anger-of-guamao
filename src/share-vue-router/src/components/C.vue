<template>
    <div>
        <p>
            {{ msg }}
        </p>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "C",
        data () {
            return {
                msg: '我是路由C',
            }
        }
    }
</script>

<style scoped>

</style>
