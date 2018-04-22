import React, {Component} from 'react';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="welcome-message">
                <img src={this.props.user.getImageUrl()}/>
                <h1>Welcome Aboard {this.props.user.getName()} 🚀</h1>
                <p>We’re proud to have you join the team. To make things smooth we crafted a chill onboarding session
                    for you. by the end of this you’ll become a true Lemonader!</p>
                <button className="button">Let's Go!</button>
            </div>
        )
    }
}