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
                    // this.value = !this.value
                    // this.$emit( 'input', this.value )
                    // this.$emit( 'click', this.value )

                    console.log( 'bus触发了' )
                    bus.$emit( 'input', this.value )
                    bus.$emit( 'click', this.value )
                }
            }
        },
        computed: {
            disableClass () {
                return {
                    'disable-con': this.disable,
                    'bg-color': this.value
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
