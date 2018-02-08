<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <!--slot-->
        <!--emit-->
        <!--props-->

        <!--
            props: value,
            emit: input
        -->
        <!--<input v-model="inputVal"></input>-->

        <div class="con">

            <!--<button>点击</button>-->
            <!--<button>取消</button>-->

            <ChocButton @click="click"
            >
                <!--:value.sync="user"-->
                <!--v-model="user"-->
                <!--:disable="disable"-->
                <!--@changeDisable="changeDis"-->
                <!--:value="user"-->
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
                user: {
                    name: 'AA',
                    age: 10,
                }
            }
        },
        methods: {
            click () {
                console.log( 'Button组件 被点击了' )
            },
            changeDis ( val ) {
                this.disable = val
            },
        },
        watch: {
            inputVal ( a ) {
                console.log( 'a', a  )
            }
        },
//        created () {
//            //  跳线
//            bus.$on( 'click', val => {
//                this.click()
//            } )
//        },
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
