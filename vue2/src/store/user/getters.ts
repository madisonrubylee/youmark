import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";


export const getters: GetterTree<UserState, RootState> = {
    getUserInfo (state): string {
        return `User: ${state.username} ` ;
    },

    getUserName (state): string {
        return state.username;
    }
}