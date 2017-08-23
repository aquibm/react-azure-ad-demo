import React, { Component } from 'react'
import queryParser from 'query-parse'
import jwtDecode from 'jwt-decode'

class AuthRedirectPage extends Component {
    state = {}

    componentDidMount() {
        const hash = window.location.hash.replace('#', '')
        const query = queryParser.toObject(hash)

        // TOOD(AM): Error page.
        if (!query.id_token) window.location.href = '/'

        if (this.isTokenValid(query.id_token))
            localStorage.setItem('aad.id.token', query.id_token)

        window.location.href = query.state
    }

    isTokenValid(idToken) {
        const expectedNonce = localStorage.getItem('aad.login.nonce')
        if (!expectedNonce) return false

        const decodedJwt = jwtDecode(idToken)

        console.log(decodedJwt)
        return decodedJwt.nonce === expectedNonce
    }

    render() {
        return <div>Some sort of spinner...</div>
    }
}

export default AuthRedirectPage
