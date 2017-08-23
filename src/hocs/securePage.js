import React, { Component } from 'react'

export default WrappedComponent =>
    class extends Component {
        state = {
            loggedIn: false
        }

        componentDidMount() {
            const token = localStorage.getItem('aad.id.token')
            if (token) {
                this.setState({ loggedIn: true })
                return
            }

            const redirectUri = encodeURIComponent(
                `${window.location.origin}/auth-redirect`
            )

            const postLoginUri = encodeURIComponent(window.location.href)

            const nonce = Math.random().toString(36).substr(2)
            localStorage.setItem('aad.login.nonce', nonce)

            const authUri = `${process.env.REACT_APP_AUTH_ENDPOINT}/${process
                .env.REACT_APP_AUTH_TENANT}/oauth2/authorize?client_id=${process
                .env
                .REACT_APP_AUTH_CLIENT_ID}&response_type=id_token&redirect_uri=${redirectUri}&scope=openid&response_mode=fragment&nonce=${nonce}&resource=${process
                .env.REACT_APP_AUTH_CLIENT_ID}&state=${postLoginUri}`

            window.location.href = authUri
        }

        render() {
            const { loggedIn } = this.state
            return loggedIn
                ? <WrappedComponent />
                : <div>Loading, surely...</div>
        }
    }
