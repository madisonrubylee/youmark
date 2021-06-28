import { Module } from 'vuex';
import { RootState } from '../types';
import { UserState } from './types';
import { getters } from '@/store/user/getters'

const state: UserState = {
    user: {
        name: 'harper',
        id: 'harper123'
    },
    error: false,
    lastLogin: new Date()
}

export const user: Module<UserState, RootState> = {
    state,
    getters,
}