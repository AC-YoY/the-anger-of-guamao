<template>
    <div>
        <p>
            {{ msg }}
        </p>
        <p>
            <a href="/">通过a标签来跳转</a>
        </p>
        <p>
            <router-link to="/">通过router-link标签来跳转</router-link>
        </p>
        <p>
            <button @click="link">js（编程方式）来跳转</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "A",
        data () {
            return {
                msg: '我是路由A',
            }
        },
        mounted () {
            console.log( this.$route )
        },
        methods: {
            link () {
                this.$router.push( '/' )
            }
        }
    }
</script>

<style scoped>

</style>
