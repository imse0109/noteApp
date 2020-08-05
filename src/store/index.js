import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
    	memoArray: [],
        memo: null,
        memoIndex: null
          
    },
    actions: {
        localMemo({commit}, payload){
            if(payload !== null && payload !== ''){

                // 로컬스토리지에 값이 있다면 값을 저장하고 푸시한다. (새로고침시) 
                if(JSON.parse(localStorage.getItem('item')) !== null){
                    this.state.memoArray = JSON.parse(localStorage.getItem('item'));
                }
                this.state.memoArray.push(payload);

                // 로컬스토리지 저장
                localStorage.setItem('item',JSON.stringify(this.state.memoArray));
                router.push('/')
            }else{
                router.push('/')
            }
        },
        ViewMemo({commit}, payload){
            if(payload !== null && payload !== ''){

                // 로컬스토리지에 인덱스값 저장
                localStorage.setItem('index',payload);
                this.state.memoIndex = payload;

                router.push('/View')
            }else{
                router.push('/View')
            }
        },
    }
})