import jwtDecode from 'jwt-decode'

export const decodeToken = (idToken = '') => {
    const decodedJwt = jwtDecode(idToken)

    return {
        idToken,
        displayName: decodedJwt.name,
        email: decodedJwt.email,
        expiry: decodedJwt.exp,
        nonce: decodedJwt.nonce
    }
}
