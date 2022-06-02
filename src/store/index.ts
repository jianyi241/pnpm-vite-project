import { createStore } from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'

const store = createStore({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
        user
    }
})

export default store
