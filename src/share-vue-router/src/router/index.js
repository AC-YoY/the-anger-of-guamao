import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import Sub from '@/components/Sub'
import D from '@/components/D'
import E from '@/components/E'

Vue.use(Router)

const router = new Router({
    // mode: 'history', // 记得配上404
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/a',
            name: 'A',
            component: A
        },
        {
            path: '/b/:char1/:char2',
            name: 'B',
            component: B
        },
        {
            path: '/c',
            name: 'C',
            component: C,
            children: [
                {
                    path: 'sub',
                    name: 'sub',
                    component: Sub
                },
            ]
        },
        {
            path: '/d',
            name: 'D',
            component: D,
            beforeEach: ( to, from , next ) => {
                console.log( '定义在router中的钩子，会被全局钩子覆盖' )
                next()
            }
        },
        {
            path: '/e/:char1/:char2',
            name: 'E',
            component: E
        },
        // {
        //     path: '*',
        //     component: 404页面
        // }
    ]
})

router.beforeEach( ( to, from, next ) => {
    // 全局钩子

    //  to, from router的实例
    /*
     next() 正常跳转，
     next( false ) 终止跳转，
     next( '/a/b/s' ) 跳转到对应的路径
     */
    console.log( `从 ${from.path } 来的全局钩子` )
    next()
} )

export default router
