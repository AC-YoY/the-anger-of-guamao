import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'

Vue.use(Vuex)
// 使用方法在 HelloWorld.vue 文件中
export default new Vuex.Store({
    state: {        //  这是状态
        user: {
            name:       'defaultName',
            permission: '---',
        },
        user_group: []
    },
    mutations: {    //  这是操作状态的手段
        /*
         这是更改 vuex 中状态的唯一方式
         无法直接调用 mutation 方法，更像是注册
         [ 接收参数是 store.state ]
         */
        /*  调用方式
         *   1. store.commit( 'set_user', user_obj )
         *   2. store.commit( {
         *       type: 'set_user',
         *       ...user_obj
         *   } )
         * */
        set_user ( state, data ) {
            //  仅覆盖同名属性，不会变更__ob__属性
            state.user = { ...state.user, ...data }
        },
        set_user_asyn (state, data) { //  错误示范！mutation不允许有异步操作
            setTimeout( () => {
                state.user = { ...state.user, ...data }
            }, 1000)
        },

    },
    actions: {
        //  [ 接收参数是 context => 就是store的副本 ]
        set_user ( { commit }, user ) {
            commit( 'set_user', user )
        },
        /*
         action自己可以是异步操作，
         也可以在业务逻辑中，异步调用commit
         */
        set_user_asyn ( { commit }, user ) {
            setTimeout( () => {
                commit( 'set_user', user )
            }, 2000)
        }
    },
    modules: {
        app
    },
//  2. 当某个属性需要被多个文件加工使用时
    getters: {
        //  [ 接收参数是 store.state ]
        //  2.1 简单加工，无参数
        admin: state => {
            return state.user.permission === 'admin'
        },
        // 2.2 如何实现提供带参数
        /*
         通过输入对相应的权限名称来判断是否许可
         getter也可以返回一个函数
         */
        allow_permission: state => role => {
            return state.user.permission === role
        }
    },
    strict: process.env.NODE_ENV !== 'production'
})
