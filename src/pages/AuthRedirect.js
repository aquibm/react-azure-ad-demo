import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import queryParser from 'query-parse'
import { decodeToken } from '../feature/auth/authUtils'
import { login } from '../feature/auth/authActions'

class AuthRedirectPage extends Component {
    componentDidMount() {
        const hash = this.props.location.hash.replace('#', '')
        const query = queryParser.toObject(hash)

        // TOOD(AM): Error page.
        if (!query.id_token) this.props.history.push('/')

        const decodedToken = decodeToken(query.id_token)

        if (this.isTokenValid(decodedToken.nonce)) {
            localStorage.setItem('aad.id.token', decodedToken.idToken)
            localStorage.removeItem('aad.login.nonce')

            this.props.login(decodedToken)
            this.props.history.push(query.state)
        }
    }

    isTokenValid(nonce) {
        const expectedNonce = localStorage.getItem('aad.login.nonce')
        if (!expectedNonce) return false
        return nonce === expectedNonce
    }

    render() {
        return <div>Some sort of spinner...</div>
    }
}

export default withRouter(
    connect(null, dispatch => ({
        login: login.bindTo(dispatch)
    }))(AuthRedirectPage)
)
