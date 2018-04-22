import React, { Component } from 'react';
import UserProfile from '../UserProfile/';

import Logo from '../../assets/img/logo.png';

class Header extends Component {
    render() {
        console.log(this.props);

        return (
            <header>
                <img src={Logo} className="App-logo" alt="logo"/>
                <UserProfile user={this.props.user}/>
            </header>
        )
    }
}

export default Header;