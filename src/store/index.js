import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
    	memoArray: [],
	  	memo: null
    },
    actions: {
        localMemo({commit}, payload){
            if(payload.memo !== null && payload.memo !== ''){
                localStorage.setItem('item',JSON.stringify(payload.memoArr));
                router.push('/')
            }else{
                router.push('/')
            }
        },
    }
})