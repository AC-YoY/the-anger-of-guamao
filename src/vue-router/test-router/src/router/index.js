import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import Sub from '@/components/main-sub'

Vue.use( Router )

//  之前用的 动态加载
//  component: resolve => require( ['../components/disk/main-area.vue'], resolve )

const router = new Router( {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/main',
            component: Main,
            meta: 'meta-main',
            beforeEnter ( to, from, next ) {
                console.log( '【路由级别的钩子】：main路由' )
                next()
            },
            children: [
                {
                    name: 'sub',
                    path: 'sub/:num(\\d+)?',
                    meta: { is_sub: true },
                    props: {
                        default: true,
                        'another-view': true,
                        'another-view2': true,
                        'another-view3': true,
                        'another-view4': true,
                        'another-view5': true,
                        'another-view6': true,
                    },
                    components: {
                        default: Sub,
                        'another-view': Sub,
                        'another-view2': Sub,
                        'another-view3': Sub,
                        'another-view4': Sub,
                        'another-view5': Sub,
                        'another-view6': Sub,
                    }
                }
            ]
        }
    ],
    scrollBehavior ( to, from, savedPosition ) {
        //
        console.log( '滚了没' )
        if ( savedPosition ) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
} )

router.beforeEach( ( to, from, next ) => {
    console.log( '【全局钩子】任何路由变化都会调用' )
    next()
} )
router.afterEach( ( to, from ) => {
    console.log( '【全局钩子】after' )
} )

export default router
