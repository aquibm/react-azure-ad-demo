import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default WrappedComponent =>
    class extends Component {
        render() {
            return (
                <div>
                    <Navbar />
                    <WrappedComponent />
                </div>
            )
        }
    }
