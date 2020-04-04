<template>
    <div id="app">
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: 'app',
        components: {},
        created() {
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem('store')) {
                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
            }

            window.addEventListener('beforeunload', () => {
                sessionStorage.setItem('store', JSON.stringify(this.$store.state))
            })
        }
    }
</script>

<style>
    body {
        margin: 0px;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
</style>
