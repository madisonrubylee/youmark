import { Module } from 'vuex';
import { RootState } from '../types';
import { UserState } from './types';
import { getters } from '@/store/user/getters'
import { mutations } from '@/store/user/mutations'
import { actions } from '@/store/user/actions'

const state: UserState = {
    username: 'harper',
    error: false,
    lastLogin: new Date()
}

export const user: Module<UserState, RootState> = {
    state,
    getters,
    mutations,
    actions,
}