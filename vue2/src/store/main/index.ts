import { Module } from 'vuex';
import { RootState } from '../types';
import { Main } from './types';
import { getters } from '@/store/main/getters'
import { mutations } from '@/store/main/mutations'
import { actions } from '@/store/main/actions'

// const state: Main[] = (this as any).dispatch("loadMainData");
const state: Main[] = []

export const mainData: Module<Main[], RootState> = {
    state,
    getters,
    mutations,
    actions,
}