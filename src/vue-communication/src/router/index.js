import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MainBtn from '@/components/MainButton'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Btn',
            component: MainBtn
        },
        {
            path: '/btn',
            name: 'Main',
            component: Main
        }
    ]
})
