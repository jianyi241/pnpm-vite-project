const mutations = {
    CHANGE_GLOBAL_NUM(state: any, val: any) {
        const { calcType } = val
        if (calcType === 'plus') {
            state.globalNum++
        } else {
            state.globalNum--
        }
    }
}

export default mutations
