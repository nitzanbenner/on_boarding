import React, {Component} from 'react';
import classNames from 'classnames';

class UserProfile extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            user: nextProps.user
        });
    }

    render() {
        const { user } = this.state;

        const classes = classNames("user-profile", { hidden: !user });

        return(
            <div className={classes}>
                { user && <div>
                    <span>{ user.getName() }</span>
                    <img src={user.getImageUrl()} />
                </div> }
            </div>
        )
    }
}

export default UserProfile;