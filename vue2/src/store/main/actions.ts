import { ActionTree } from "vuex";
import { RootState } from "../types";
import homeData from '../../model/homeData';
import { Main } from "./types";
import { MainMutations } from './mutations';

export const actions: ActionTree <Main[], RootState> = {
    loadMainData ({ commit , dispatch }) {
        return homeData.list('').then(data => {
            commit(MainMutations.SET_HOME_RECOMM, data)
           // return data;
        })
    }


    // [MainMutations.SET_HOME_RECOMM]({ commit }) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {

    //             commit(MainMutations.SET_HOME_RECOMM, data)
    //             resolve(data)
    //           }, 500)
    //     })
    // }
}