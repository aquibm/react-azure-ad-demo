import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isLoggedIn = false, logout }) =>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/seekret">Seekret</Link>
            </li>
        </ul>

        {isLoggedIn &&
            <ul>
                <li>
                    <Link to="/s00per-seekret">S00per Seekret page</Link>
                </li>
                <li>
                    <a href="" role="button" onClick={() => logout()}>
                        Logout
                    </a>
                </li>
            </ul>}
    </div>

export default Navbar
