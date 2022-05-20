import {ActionContext} from "vuex";

const actions: any = {
    changeGlobalNum(context: ActionContext<string, any>, val: any) {
        context.commit('CHANGE_GLOBAL_NUM', val)
    }
}

export default actions
