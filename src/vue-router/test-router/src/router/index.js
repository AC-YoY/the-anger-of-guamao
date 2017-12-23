import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import Sub from '@/components/main-sub'

Vue.use(Router)

//  之前用的 动态加载
//  component: resolve => require( ['../components/disk/main-area.vue'], resolve )
export default new Router( {
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
            children: [
                {
                    name: 'sub',
                    path: 'sub/:num(\\d+)?',
                    props: {
                        default: true,
                        'another-view': true,
                    },
                    components: {
                        default: Sub,
                        'another-view': Sub,
                    }
                }
            ]
        }
    ]
} )
