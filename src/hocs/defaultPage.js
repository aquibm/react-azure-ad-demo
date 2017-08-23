import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Navbar from '../components/Navbar'
import { initLogout } from '../feature/auth/authActions'

export default WrappedComponent => {
    class DefaultPageWrap extends Component {
        _logout = () => {
            const { logout, history } = this.props
            logout()
            history.push('/')
        }

        render() {
            const { isLoggedIn } = this.props

            return (
                <div>
                    <Navbar isLoggedIn={isLoggedIn} logout={this._logout} />
                    <WrappedComponent />
                </div>
            )
        }
    }

    return compose(
        withRouter,
        connect(
            ({ authState }) => ({
                isLoggedIn: authState.isLoggedIn
            }),
            dispatch => ({
                logout: () => dispatch(initLogout())
            })
        )
    )(DefaultPageWrap)
}
