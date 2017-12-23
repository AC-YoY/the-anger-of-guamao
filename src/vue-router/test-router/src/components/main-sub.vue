<template>
    <div class="hello">
        <button @click="change_id">更换参数</button>
        <p>sub路由</p>
        <p>{{ parsed_id }}</p>
        <p>{{ num }}</p>
    </div>
</template>

<script>
    export default {
        name: 'entry-sub',
        props: {
            num: {
                required: true,
            }
        },
        data () {
            return {
                parsed_id: '',
            }
        },
        mounted () {
            this.init_data()
            console.log( 'this',this )
        },
        // 方案1  route 变化后
        watch: {
            '$route' ( to, from ) {
                this.init_data()
            }
        },
        // 方案2  route 变化前
//        beforeRouteUpdate ( to, from, next ) {
//            this.init_data( )
//            next()
//        },
        computed: {
            dynamic_id () {
                return this.$route.params.num
            }
        },
        methods: {
            init_data () {
                this.parsed_id =  this.show_dy()
            },
            show_dy () {
                return "dynamic_id: "+ this.dynamic_id
            },
            change_id () {
                const rd = Math.round( Math.random() * 100 )
//                this.$router.push( "/main/sub/" + rd )
//                this.$router.push( { name: 'sub', params: { num: '345' } } )
                this.$router.push( { name: 'sub', query: { plan: 'private' } } )

            },
        }
    }
</script>

<style scoped>
    .hello {
        width: 100%;
        height: 100%;
    }
</style>
