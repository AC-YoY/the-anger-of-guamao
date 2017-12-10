/*
* 局部的 module 唯一要考虑的问题就是 如何访问全局 state 对象
* ！！！ 这里的 module 其实还可以使用[ 命名空间 ]再度嵌套，不过我想不出实际的使用案例，就不出斧了
* */
const app = {
    state: {
        cachePage:  [],
        lang:       '',
    },
    mutations: {
        //  [ mutation/getter 接收的第一个参数是局部 state ]
        //  mutation 中无法访问 全局 state？？？
        setCachePage ( state, list ) {
            state.tagsList.push( ...list )
        },
        setLang ( state, lang ) {
            state.lang = lang
        }
    },
    actions: {
        //  [ action 接收的第一个参数是 context对象 ]
        //  context.state        :   局部 state
        //  context.commit       :   触发 mutation 的方法
        //  context.rootState    :   根节点的 state 对象
        setCachePage( { state, commit, rootState }, list ) {
            commit( 'setCachePage', list )
        }
    },
    getters: {
        //  state       :   局部 state
        //  getters     :   接收一个函数来传参
        //  rootState   :   根节点的 state 对象
        sumWithRootCount ( state, getters, rootState ) {
            return state.count + rootState.count
        }
    }
}

export default app
