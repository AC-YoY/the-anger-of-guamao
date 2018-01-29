import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EasyHelloWorld from '@/components/EasyHelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/easy',
            name: 'HelloWorld',
            component: EasyHelloWorld
        },
    ]
})
