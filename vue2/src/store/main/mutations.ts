import { MutationTree } from "vuex"
import { Main } from "./types"

export enum MainMutations {
    SET_HOME_RECOMM = "SET_HOME_RECOMM",
}

export const mutations: MutationTree<Main[]> = {
    [MainMutations.SET_HOME_RECOMM] (state, payload) {
        state = payload;
    }
}