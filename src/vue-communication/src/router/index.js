import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MainBtn from '@/components/MainButton'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/btn',
            name: 'Btn',
            component: MainBtn
        }
    ]
})
