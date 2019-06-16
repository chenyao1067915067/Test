import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

import router from '../router'

Vue.use(Vuex)


const state = {
    num:0,
    show:false,
    isActive:false,
}

const getters = {
    getNums(state) {
       return state.num
    }
}

const mutations = {
    //改变数值
    [types.CHANGE_NUMS](state,n){
        state.num += n
    },
    [types.TRIGGLE_LEFT](state) {
        router.go(-1)
    },
    [types.TRIGGLE_RIGHT](state) {
        let is = state.show;
        console.log(state)
        if(is){
            state.show = false;
            state.isActive = false;
        }
        else{
            state.show = true
            state.isActive = true
        }
    },
    [types.TOGGLE_SIDBAR](state) {
        state.show = false,
        state.isActive = false
    }
}

const actions = {
    //提交mutations
    changeNums({ commit }, n){
        commit(types.CHANGE_NUMS, n)
    },
    //点击左边
    triggleLeft({ commit }){
        commit(types.TRIGGLE_LEFT)
    },
    //点击右边
    triggleRight({ commit }){
        commit(types.TRIGGLE_RIGHT)
        
    },
    //切换菜单
    toggleSidbar({ commit }){
        console.log('441');
        commit(types.TOGGLE_SIDBAR)
    }
}

const store = new Vuex.Store({
   state,
   getters,
   mutations,
   actions
})

export default store