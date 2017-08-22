import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/Home'
import SeekretPage from './pages/Seekret'
import AuthRedirectPage from './pages/AuthRedirect'

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/seekret',
        component: SeekretPage
    },
    {
        path: '/auth-redirect',
        component: AuthRedirectPage
    }
]

const AppRouter = () =>
    <Router>
        <div>
            {routes.map((route, idx) =>
                <Route
                    key={idx}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            )}
        </div>
    </Router>

export default AppRouter
