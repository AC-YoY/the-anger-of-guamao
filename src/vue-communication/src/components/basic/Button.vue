<template>
    <div class="choc-btn-con"
         :class="disableClass"
         :disable="disable"
         @click="emitClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ChocButton",
        props: {
            disable: Boolean,
        },
        methods: {
            emitClick () {
                if ( !this.disable ) {
                    this.$emit( 'click' )
                }
            }
        },
        computed: {
            disableClass () {
                return {
                    'disable-con': this.disable
                }
            }
        }
    }
</script>

<style>
    /*
        这里不应该使用 scope 作用域
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
