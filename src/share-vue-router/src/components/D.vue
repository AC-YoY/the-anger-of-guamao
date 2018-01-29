<template>
    <div>
        <p>
            {{ msg }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "D",
        data () {
            return {
                msg: '我是路由D',
            }
        },
        beforeRouteEnter ( to, from, next ) {
            // 组件内部钩子
            console.log( '组件内部的钩子' )
            next()
        },
        beforeRouteLeave ( to, from, next ) {
            alert( '进来了就别想出去！除非更改D.vue组件的配置' )
            next( false )
        }
    }
</script>

<style scoped>

</style>
