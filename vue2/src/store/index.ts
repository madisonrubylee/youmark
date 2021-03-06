import Vue from 'vue';
import Vuex , { StoreOptions }from 'vuex';
import { RootState } from './types';
import { user } from '@/store/user';
import { mainData } from '@/store/main'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
       user,
       mainData
    },
    mutations: {
    },
    actions: {
    }
};

export default new Vuex.Store<RootState>(store);