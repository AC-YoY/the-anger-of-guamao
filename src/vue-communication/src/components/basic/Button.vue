<template>
    <div class="choc-btn-con" :class="disableClass"
         :disable="disable"
    >
         <!--@click="handleClick"-->

        <slot></slot>

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
        },
        methods: {
            handleClick () {
                if ( !this.disable ) {
                    this.$emit( 'click' )
                    this.$emit( 'input', '更改过后的value' )
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
            //     this.disable = false
            //     this.obj.name = 'bb'

                this.$emit( 'changeDisable', false )
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
