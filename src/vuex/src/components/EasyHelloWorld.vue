<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <ul style="background: red;">
            <li>NAME: {{ user.name }}</li>
            <li>PERMISSION: {{ user.permission }}</li>
        </ul>

        <button @click="click">更改User</button>
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Easy Hello World!'
            }
        },
        computed: {
            user: {
                get () {
                    return this.$store.state.user
                },
            }
        },
        methods: {
            click () {
                this.user = { name: 'lala' }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
