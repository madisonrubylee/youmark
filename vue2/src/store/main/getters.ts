import { GetterTree } from "vuex";
import { RootState } from "../types";
import { Main } from "./types";


export const getters: GetterTree<Main[], RootState> = {
    getMainData (state): Main[] {
        console.log('getter의' , state);
        return state;
    }
}