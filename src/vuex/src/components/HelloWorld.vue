<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <ul style="background: red;">
            <li>NAME: {{ user.name }}</li>
            <li>PERMISSION: {{ user.permission }}</li>
            <li v-if="admin">admin权限可见</li>
            <li v-if="allow_permission( 'guest' )">guest权限可见</li>
        </ul>

        <button @click="click">更改User</button>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created () {
            const user = { name: 'hehe', permission: 'admin' }
//          mutation 使用方法
//            setTimeout( () => {
//                1.
//                this.$store.commit( 'set_user', user )
//                2.
//                this.$store.commit( {
//                    type: 'set_user',
//                    ...user
//                } )
//            }, 1000 )
//            mutation中不允许出现异步方法，所以下面这个会报错
//            this.$store.commit( 'set_user_asyn', user )
//            action 使用方法
            this.$store.dispatch( 'set_user_asyn', user )
        },
        computed: {
//            1. 当你有多个 vuex 的 state 属性需要导入的时候
//            store.state.user      // 基础用法
//            ...mapState( [        // 简单配置
//                'user',
//                'user_group'
//            ] ),
            ...mapState( {          // 复杂配置 只能用来改名字！？！？
                user: 'user',
                user_group: {       // 用了mapState之后就不能get/set了
                    get () {},      // 这是 错误 的！
                    set () {}
                }
            } ),
//            2. vuex 的 getter 配置
//            store.getters.admin   // 基础用法
//            ...mapGetters( [      // 简单配置
//                'admin',
//                'allow_permission'
//            ] ),
            ...mapGetters( {        // 复杂配置
                admin: 'admin',
                allow_permission: 'allow_permission',
            } ),
        },
        methods: {
            click () {
                this.$store.commit( 'set_user', {
                    name: 'lala'
                } )
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
