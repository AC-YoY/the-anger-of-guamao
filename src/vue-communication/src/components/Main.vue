<template>
    <div class="hello">
        <h2>{{ msg }}</h2>

        <!--<div class="con">-->
            <!--buttons <br>-->
            <!--<ChocButton @click="btnClick" disable>可以点击和禁止的按钮</ChocButton>-->
        <!--</div>-->

        <div class="con" :ddd="val" >
            Radio <br>
            <!--<ChocButton @click="controlCheckbox">给checkbox用</ChocButton>-->

            <ChocCheckbox
                          v-model="checkVal"
                        >
                        <!--@click="checkboxClick"-->
                          <!--:value="checkVal"-->
                <!--
                    我们更加希望做到的是 添加一个点击事件 ，由它来告诉我们子组件是什么状态
                      >>>>>  前提是这个点击事件 是一个合理的事件，
                    （ 汉三 ）不应该强行建立一个无关的事件来传递子组件内部的值，就应该用ref
                -->
            </ChocCheckbox>

        </div>

        <!--  这个对应的是 单项数据流 v-model 的例子 -->
        <!-- <input v-model="input" type="text"> -->

    </div>
</template>

<script>
    import bus from './bus/bus'

    import ChocButton from './basic/Button'
    import ChocCheckbox from './basic/Checkbox'

    export default {
        name: 'HelloWorld',
        components: {
            ChocButton,
            ChocCheckbox,
        },
        created () {
            //  跳线
            bus.$on( 'click', val => {
                this.checkboxClick( val )
            } )


        },
        data () {
            return {
                msg:    '组件页面',
                val:    'xx',
                input:  'ddd',

                checkVal: true,
            }
        },
        watch: {
            input ( val ) {
                console.log( 'input value', val )
            }
        },
        methods: {
            btnClick () {
                this.val = '3'
            },
            checkboxClick ( val ) {
                // this.checkVal = !this.checkVal
                console.log( `checkbox是${val}状态` )
            },
            // controlCheckbox () {
            //     this.checkVal = !this.checkVal
            // }
        }
    }
</script>

<style scoped>
    .con {
        float: left;
        width: 200px;
        height: 300px;
        border: 1px solid deepskyblue;
    }
</style>
