import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MainBtn from '@/components/MainButton'
import Self from '@/components/Self'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Btn',
            component: MainBtn
        },
        {
            path: '/self',
            name: 'Self',
            component: Self
        },
        {
            path: '/btn',
            name: 'Main',
            component: Main
        }
    ]
})
