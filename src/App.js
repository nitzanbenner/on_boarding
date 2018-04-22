/* global gapi, auth2 */

import React, {Component} from 'react';
import Header from './components/Header/';
import StarsContainer from './components/Stars/';
import Content from './components/OnBoardingContent/';

import './style.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {},
            screen: "Hero",
        }

        let auth2;
    }

    startGoogleAPI() {
        gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            this.auth2 = gapi.auth2.init({
                client_id: '645195307457-r9lnd8t6oj0njd9ov3iai5nltsg1an76.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin'
            });
            this.attachSignin(document.getElementById('login-btn'));
        });
    }

    attachSignin(element) {
        const { user } = this.state;

        this.auth2.attachClickHandler(element, {},
            (user) => {
                const userProfile = user.getBasicProfile();

                this.setState({
                    user: userProfile,
                    screen: "Welcome"
                });
            }, function(error) {
                // alert(JSON.stringify(error, undefined, 2));
            });
    }

    componentDidMount(){
        this.startGoogleAPI();
    }

    render() {
        const { screen, user } = this.state;

        return (
            <div className="App">
                <Header user={ user }/>
                <StarsContainer />
                <Content screen={ screen } user={ user } />
            </div>
        );
    }
}

export default App;