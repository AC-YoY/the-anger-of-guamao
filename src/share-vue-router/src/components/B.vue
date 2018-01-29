<template>
    <div>
        <p>
            {{ msg }}
        </p>
        <p>
            第一个参数：{{ char1 }}
        </p>
        <p>
            第二个参数：{{ char2 }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "B",
        data () {
            return {
                msg:    '我是路由B',
                char1:   '',
                char2:   '',
            }
        },
        mounted () {
            // console.log( this.$route )
            this.urlChange()
        },
        watch: {
            '$route' ( to, from ) {
                this.urlChange()
            }
        },
        methods: {
            urlChange () {
                //  获取动态参数的方法
                this.char1 = this.$route.params.char1
                this.char2 = this.$route.params.char2
            }
        }
    }
</script>

<style scoped>

</style>
