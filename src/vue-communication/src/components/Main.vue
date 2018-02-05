<template>
    <div class="hello">
        <h2>{{ msg }}</h2>

        <!--<div class="con">-->
            <!--buttons <br>-->
            <!--<ChocButton @click="btnClick" disable>可以点击和禁止的按钮</ChocButton>-->
        <!--</div>-->

        <div class="con" :ddd="val" >
            Radio<br>
            <!--<ChocButton @click="controlCheckbox">给checkbox用</ChocButton>-->

            <ChocCheckbox @change="checkboxClick">
                        <!--v-model="checkVal"-->
                        <!--@click="checkboxClick"-->
                        <!--:value="checkVal"-->
                <!--
                    我们更加希望做到的是 添加一个点击事件 ，由它来告诉我们子组件是什么状态
                      >>>>>  前提是这个点击事件 是一个合理的事件，
                    （ 汉三 ）不应该强行建立一个无关的事件来传递子组件内部的值，就应该用ref
                -->
            </ChocCheckbox>

        </div>

        <div class="con">

            Checkbox Group<br>

            <ChocCheckboxGroup v-model="checkedList">
                <ChocCheckbox v-for="l in checkboxList"
                              :label="l" :key="l">
                </ChocCheckbox>
            </ChocCheckboxGroup>

        </div>


        <div class="con">
            <h3>iView checkbox</h3>


            <p>copy</p>
            <!--:disabled="true"-->
            <IviewCheckbox size="large"></IviewCheckbox>
            <p>heh</p>
            <IviewCheckboxgroup v-model="group">
                <IviewCheckbox label="a"></IviewCheckbox>
                <IviewCheckbox label="b"></IviewCheckbox>
                <IviewCheckbox label="c"></IviewCheckbox>
            </IviewCheckboxgroup>



            <p>origin</p>
            <Checkbox label="da" size="large">
                <!--香蕉-->
            </Checkbox>

            <input v-model="www" type="checkbox" checked="currentValue" @change="change">

            <div type="checkbox" style="display:inline-block;width:20px;height:20px;background-color:yellow;"
                   role="checkbox"
                   :aria-checked="true"></div>
        </div>
        <!--  这个对应的是 单项数据流 v-model 的例子 -->
        <!-- <input v-model="input" type="text"> -->

    </div>
</template>

<script>
    import bus from './bus/bus'

    import ChocButton from './basic/Button'
    import ChocCheckbox from './basic/Checkbox'
    import ChocCheckboxGroup from './basic/CheckboxGroup'

    import IviewCheckbox from './basic/iview-checkbox'
    import IviewCheckboxgroup from './basic/iview-checkboxgroup'

    export default {
        name: 'HelloWorld',
        components: {
            ChocButton,
            ChocCheckbox,
            ChocCheckboxGroup,
            IviewCheckbox,
            IviewCheckboxgroup,
        },
        created () {
            //  跳线
            bus.$on( 'click', val => {
                this.checkVal = val
            } )

        },
        mounted () {
            console.log( 'This:', this )
        },
        data () {
            return {
                msg:            '组件页面',
                val:            'xx',
                input:          'ddd',

                checkVal:       true,
                checkboxList:   [ 'A', 'B', 'C', 'D' ],
                checkedList:    [],
                www:            '',
                group:          [],
            }
        },
        watch: {
            input ( val ) {
                console.log( 'input value', val )
            },
            checkVal ( val ) {
                console.log( 'Val:', val )
            },
            checkedList ( val ) {
                console.log( 'checkedList', val )
            },
            group ( g ) {
                console.log( '调用处', g )
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
            change () {
                console.log( 'change', this.www )
            }
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
