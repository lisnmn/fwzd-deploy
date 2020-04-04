import Vue from 'vue'
import './plugins/axios'
import './plugins/element.js'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let base = process.env.NODE_ENV === 'production' ?'http://114.55.107.5:11455':'http://localhost:11455';
axios.defaults.baseURL = base
Vue.prototype.baseURL = base

router.beforeEach((to, from, next) => {
    let getFlag = localStorage.getItem('Flag')

    if (getFlag === 'isLogin') {
        store.state.isLogin = true
        next()
    } else {
        if (to.meta.isLogin) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    }

})

router.afterEach(route => {
    window.scroll(0, 0)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
