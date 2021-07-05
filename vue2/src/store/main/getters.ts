import { GetterTree } from "vuex";
import { RootState } from "../types";
import { Main, MainBanner } from "./types";


export const getters: GetterTree<any, RootState> = {
    getMainData (state): Main[] {
        console.log('getter의' , state);
        return state;
    },
    
    getMainBanner (state): MainBanner[] {
        return state;
    }
}