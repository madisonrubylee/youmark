import { MutationTree } from "vuex"
import { Main } from "./types"
import Vue from 'vue'

export enum MainMutations {
    SET_HOME_RECOMM = "SET_HOME_RECOMM",
}

export const mutations: MutationTree<Main[]> = {
    [MainMutations.SET_HOME_RECOMM] (state, payload) {
        console.log(payload)
        //state = [state, ...payload]
        for(const i in payload) {
            Vue.set(state, i , payload[i]);
        }
       // state = payload;
    }
}