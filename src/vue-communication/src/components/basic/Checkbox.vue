<template>
    <div class="choc-checkbox-con"
         :class="disableClass"
         :disable="disable"
         @click="handleClickVModel">
    </div>
</template>

<script>
    import bus from '../bus/bus'

    export default {
        name: "ChocCheckbox",
        props: {
            disable: Boolean,
            value: {
                type: Boolean,
                default: false,
            },
            label: {
                type: String,
            }
        },
        data () {
            return {
                status: this.value,
            }
        },
        methods: {
            // handleClick () {
            //     if ( !this.disable ) {
            //         this.status = !this.status
            //         this.$emit( 'input', this.status )
            //         this.$emit( 'click', this.status )
            //     }
            // },
            handleClickVModel () {
                if ( !this.disable ) {
                    console.log( 'child 改变了' )
                    this.status = !this.status
                    // this.value = !this.value
                    // this.$emit( 'input', this.value )
                    this.$emit( 'change', this.status )
                    this.$emit( 'input', {
                        value:  this.label,
                        status: this.status
                    } )
                    // console.log( 'bus触发了' )
                    // bus.$emit( 'input', this.status )
                    // bus.$emit( 'click', this.status )
                }
            }
        },
        computed: {
            disableClass () {
                return {
                    'disable-con': this.disable,
                    'bg-color': this.status
                }
            }
        }
    }
</script>

<style scoped>
.choc-checkbox-con {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 2px;
    border: 1px solid black;
    cursor: pointer;
}
.disable-con {
    background-color: darkgrey;
    cursor: not-allowed;
}
    .bg-color {
        background-color: darkcyan;
    }
</style>
