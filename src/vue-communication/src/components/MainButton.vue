<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <input v-model="inputVal"></input>
        <!--
            1. click事件
            2. disable
        -->
        <!--
            v-model="xxx"
            props: value
            emit: input
        -->
        <div class="con">
            <ChocButton >
                <!--@click="click"-->
                <!--:disable="true"-->
                <!--:value.sync="xxx"-->
                <!--value="xxx" @input="changeValue"-->
                choc-button
            </ChocButton>

        </div>

    </div>
</template>

<script>
    import bus from './bus/bus'
    import ChocButton from './basic/Button'

    export default {
        name: 'MainButton',
        components: {
            ChocButton,
        },
        mounted () {
            console.log( 'This:', this )
        },
        data () {
            return {
                msg:        '介绍五个通信方法',
                val:        'xxx',
                inputVal:   'ddd',
                disable:    true,
            }
        },
        methods: {
            click () {
                console.log( 'Button组件 被点击了' )
            },
            changeDis ( val ) {
                this.disable = val
            }
        },
        watch: {
            inputVal ( a ) {
                console.log( 'a', a  )
            }
        },
        created () {
            //  跳线
            bus.$on( 'click', val => {
                this.click()
            } )
        },
        mounted () {
            console.log( 'this', this )
        }
    }
</script>

<style scoped>
    .con {
        position: absolute;
        top: 0;
        left : 0;
        right: 0;
        bottom: 0;
        margin: auto;

        margin-top: 300px;
        width: 200px;
        height: 300px;
        border: 1px solid deepskyblue;
    }
</style>
