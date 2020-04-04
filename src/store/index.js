import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        book: '',
        imageList: [],
        imageIndex: 0
    },
    getters: {
        isLogin: state => state.isLogin,
        getBook: state => state.book,
        getImageList: state => state.imageList,
        getImageIndex: state => state.imageIndex
    },
    mutations: {
        userStatus(state, flag) {
            state.isLogin = flag
        },
        mutateBook(state, book) {
            state.book = book
        },
        mutateImageList(state, imageList) {
            state.imageList = imageList
        },
        mutateImageIndex(state, imageIndex) {
            state.imageIndex = imageIndex
        }
    },
    actions: {
        setUser({commit}, flag) {
            commit('userStatus', flag)
        },
        setBook(context, book) {
            context.commit('mutateBook', book)
        },
        setImageList(context, imageList) {
            context.commit('mutateImageList', imageList)
        },
        setImageIndex(context, imageIndex) {
            context.commit('mutateImageIndex', imageIndex)
        }
    },
    modules: {}
})
