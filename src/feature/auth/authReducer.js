import { createReducer } from 'redux-act'
import * as actions from './authActions'

const authReducer = createReducer(
    {
        [actions.login]: (state, payload) => ({
            ...state,
            ...payload,
            isLoggedIn: true
        }),

        [actions.logout]: state => ({
            isLoggedIn: false
        })
    },
    {
        isLoggedIn: false
    }
)

export default authReducer
