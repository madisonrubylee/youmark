// export default {
//     namespaced: true,
//     state: {
//         recommList: [],
//     },
//     getters: {
//         recommList: state => state.recommList,
//     },
//     actions: {
//         async getRecommList ({ commit, dispatch }) {
//            const response = await dispatch('request')
//            commit('SET_HOME_RECOMM', response.data)
//            return response
//         }
//     },
//     mutations: {
//         ['SET_HOME_RECOMM'] (state, payload) {
//             state.recommList = payload
//         }
//     }
// }
