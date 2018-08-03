import * as types from './mutation-types'

export default {
    [types.INCREMENT_COUNT](state) {
        state.count ++;
    },

    [types.DECREMENT_COUNT](state) {
        state.count --;
    }
}