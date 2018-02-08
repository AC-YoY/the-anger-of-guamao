<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <button @click="toggleModal">弹框</button>
        <div class="con" v-if="showModal" v-clickoutside="closeModal">
            <p>我是弹窗</p>
            <p>我是弹窗</p>
            <p>我是弹窗</p>
        </div>
    </div>
</template>

<script>
    import ClickOutside from '../directive/click-outside'
    export default {
        name: 'Self',
        directives: {
            'clickoutside': ClickOutside,
        },
        data () {
            return {
                msg:        '自定义指令',
                showModal:    false,
            }
        },
        methods: {
            toggleModal () {
                this.showModal = !this.showModal
            },
            closeModal () {
                this.showModal = false
            }
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
