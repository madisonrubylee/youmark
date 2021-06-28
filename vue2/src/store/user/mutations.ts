import { MutationTree } from "vuex";
import { UserState } from "./types";

export enum UserMutations {
    SET_USERNAME = "SET_USERNAME",
}

export const mutations: MutationTree<UserState> = {
    [UserMutations.SET_USERNAME] (state, payload: string) {
        state.username = payload;
    }
}