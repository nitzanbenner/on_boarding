import React, { Component } from 'react';

import Google from '../../assets/img/google.png';

class LoginButton extends Component {
    render() {
        return (
            <div id="login-btn" className="login-button">
                <span className="login-button-text">Login With Google</span>
                <span className="login-button-icon"><img src={Google} alt=""/></span>
            </div>
        )
    }
}

export default LoginButton;