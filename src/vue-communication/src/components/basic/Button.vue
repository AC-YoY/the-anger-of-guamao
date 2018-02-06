<template>
    <div class="choc-btn-con" :class="disableClass"
    >
         <!--@click="handleClick"-->
         <!--:disable="disable"-->

        <slot></slot>
        <!--<p>{{value.name}}</p>-->
        <!--<p>{{value.age}}</p>-->
    </div>
</template>

<script>
    import bus from '../bus/bus'
    export default {
        name: "ChocButton",

        props: {
            disable: {
                type: Boolean,
                default: false
            },
//            value: Object,
        },
        methods: {
            handleClick () {
                if ( !this.disable ) {
                    this.$emit( 'click' )
//                    this.$emit( 'update:value', {
//                        name: 'syncchange',
//                        age: 22,
//                    } )
                    // bus.$emit( 'click' )
                    // this.$emit( 'update:value', '更改过后的value' )
                }
            }

        },
        computed: {
            disableClass () {
                return {
                    'disable-con': this.disable
                }
            }
        },
        mounted () {
            setTimeout( () => {
//                this.$emit( 'changeDisable', false )
                    this.value.name = 'props漏洞'
//                this.$emit( 'input', {
//                    name: '改了',
//                    age:  99,
//                } )


            }, 1000)

        }
    }
</script>

<style>
    /*
        作为UI组件不应该使用 scope 作用域
    */
    .choc-btn-con {
        display: inline-block;
        padding: 6px 20px;
        border: 1px solid black;
        cursor: pointer;
    }
    .disable-con {
        background-color: darkgrey;
        cursor: not-allowed;
    }
</style>
