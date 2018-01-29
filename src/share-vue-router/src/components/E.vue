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

        <button @click="click">随机更换参数</button>
    </div>
</template>

<script>
    export default {
        name: "B",
        data () {
            return {
                msg:    '我是路由E',
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
            },
            click () {
                const char1 = Math.floor( Math.random() * 100 )
                const char2 = Math.floor( Math.random() * 100 )

//                  相当于 router.push( '/e/${char}/${char2}' )
                this.$router.push( {
                    name: 'E',
                    params: {
                        char1: char1,
                        char2: char2
                    }
                } )
//                  相当于 router.push( '/e?plan=private' )
//                this.$router.push({ path: '/e', query: { plan: 'private' }})
            }
        }
    }
</script>

<style scoped>

</style>
