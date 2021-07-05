import { ActionTree } from "vuex";
import { RootState } from "../types";
import homeData from '../../model/homeData';
// import { Main, MainBanner } from "./types";
import { MainMutations } from './mutations';

export const actions: ActionTree <any, RootState> = {
    loadMainData ({ commit }): Promise<Array<object>> {
        return homeData.list('').then(data => {
            commit(MainMutations.SET_HOME_RECOMM, data)
            return data;
        })
    },

    loadBannerData ({ commit }): Promise<Array<object>> {
        return homeData.bannerList('').then(data => {
            commit(MainMutations.SET_HOME_BANNER, data)
            return data;
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