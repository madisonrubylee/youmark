import { MutationTree } from "vuex"
import { Main } from "./types"
import Vue from 'vue'

export enum MainMutations {
    SET_HOME_RECOMM = "SET_HOME_RECOMM",
    SET_HOME_BANNER = "SET_HOME_BANNER",
}

export const mutations: MutationTree<any> = {
    [MainMutations.SET_HOME_RECOMM] (state, payload) {
        console.log(payload)
        state.mainRecomm = payload
        //state = [state, ...payload]
        // for(const i in payload) {
        //     Vue.set(state, i , payload[i]);
        // }
       // state = payload;
    },
    [MainMutations.SET_HOME_BANNER] (state, payload) {
        console.log(payload)
        state.mainBanner = payload
        //state = [state, ...payload]
        // for(const i in payload) {
        //     Vue.set(state, i , payload[i]);
        // }
       // state = payload;
    }
}