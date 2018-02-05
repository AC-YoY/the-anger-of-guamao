<template>
    <div class="choc-checkboxgroup-con" @input="checkboxChange">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ChocCheckboxGroup",
        props: {
            value: {
                type: Array,
                required: true,
            },
        },
        methods: {
            checkboxChange ( val ) {
                console.log( 'parent 得到了事件' )
                const key = val.value
                const status = val.status
                if ( status ) {
                    this.value.push( key )
                } else {
                    const idx = this.value.indexOf( key )
                    this.value.splice( idx, 1 )
                }
                // this.$emit( 'input', val )
            }
        }
    }
</script>

<style>
.choc-checkboxgroup-con {
    border: 1px solid green;
    display: inline-block;
    font-size: 0;
}
</style>
