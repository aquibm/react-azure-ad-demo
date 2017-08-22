import React, { Component } from 'react'

export default WrappedComponent =>
    class extends Component {
        state = {
            loggedIn: false
        }

        componentDidMount() {
            const { loggedIn } = this.state

            if (!loggedIn) {
                const redirectUri = encodeURIComponent(
                    `${window.location.origin}/auth-redirect`
                )
                const authUri = `${process.env
                    .REACT_APP_AUTH_ENDPOINT}/${process.env
                    .REACT_APP_AUTH_TENANT}/oauth2/authorize?client_id=${process
                    .env
                    .REACT_APP_AUTH_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&response_mode=query`

                window.location.href = authUri
            }
        }

        render() {
            const { loggedIn } = this.state
            return loggedIn ? <WrappedComponent /> : <div>Loading...</div>
        }
    }
