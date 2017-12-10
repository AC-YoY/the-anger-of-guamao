<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
        <ul style="background: red;">
            <li>{{ user.name }}</li>
            <li>{{ user.permission }}</li>
            <li v-if="admin">admin权限可见</li>
            <li v-if="allow_permission( 'guest' )">guest权限可见</li>
        </ul>
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
            ...mapState( {          // 复杂配置
                user: 'user',
                user_group: {
                    get () {},
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
