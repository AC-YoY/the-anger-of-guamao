<template>
    <div>
        <p>
            {{ msg }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Sub",
        data () {
            return {
                msg: '我是路由C下的子路由',
            }
        }
    }
</script>

<style scoped>

</style>
