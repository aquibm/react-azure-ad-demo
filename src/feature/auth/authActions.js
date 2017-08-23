import { createAction } from 'redux-act'
import { decodeToken } from './authUtils'

export const login = createAction('Logs the user in')

export const logout = createAction('Logs the user out')

export const initLogout = () => dispatch => {
    localStorage.removeItem('aad.id.token')
    dispatch(logout())
}

export const hydrateAuthState = () => dispatch => {
    const token = localStorage.getItem('aad.id.token')
    if (!token) return

    const decodedToken = decodeToken(token)
    const timeNow = Math.ceil(new Date().getTime() / 1000)

    if (decodedToken.expiry > timeNow) dispatch(login(decodedToken))
}
