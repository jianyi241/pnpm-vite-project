import { ActionContext } from 'vuex'
import AuthorizeInfo from '../../model/po/AuthorizeInfo'

const user = {
    state: {
        userInfo: sessionStorage.getItem('userInfo') ?
            JSON.stringify(sessionStorage.getItem('userInfo')) :
            '',
        token: sessionStorage.getItem('token')
    },
    getters: {
        getUserInfo(state: any) {
            return state.userInfo
        }
    },
    mutations: {
        SET_USER_INFO(state: any, data: AuthorizeInfo) {
            const { token, userInfo } = data
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
            if (typeof token === 'string') {
                sessionStorage.setItem('token', token)
            }
            state.userInfo = userInfo
            state.token = token
        },
        CLEAR_USER_INFO(state: any) {
            sessionStorage.clear()
            state.userInfo = ''
            state.token = ''
        }
    },
    actions: {
        setUserInfo(context: ActionContext<string, any>, data: any) {
            context.commit('SET_USER_INFO', data)
        },
        clearUserInfo(context: ActionContext<string, any>) {
            context.commit('CLEAR_USER_INFO')
        }
    }
}

export default user
