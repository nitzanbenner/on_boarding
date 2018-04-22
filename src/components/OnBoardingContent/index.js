import React, { Component } from 'react';
import classNames from 'classnames';
import Hero from '../Hero';
import Welcome from '../Welcome';
import Archive from '../Archive';
import Podcast from '../Podcast';

export default class Content extends Component{
    constructor(props) {
        super(props);

        this.state = {
            hidden: false,
            screen: <Hero />
        };
    }

    componentDidMount(){
        setTimeout(() =>
            this.setState({
                hidden: false
            }),
            100
        )
    }

    componentWillReceiveProps(nextProps){
        const { screen } = nextProps;

        if(this.props.screen !== screen) {
            this.setState({
                hidden: true
            });
            setTimeout(() => {
                    this.setState({
                        hidden: false,
                        screen: this.getCurrentScreen(screen)
                    });
                },
                500
            );
        }
    }

    render(){
        const classes = classNames("content-container", { hidden: this.state.hidden }, { out: this.state.out });

        return(
            <div className={ classes }>
                { this.state.screen }
            </div>
        )
    }

    getCurrentScreen(screen){
        if(screen === "Welcome")
            return <Welcome user={ this.props.user } />;
        if(screen === "Archive")
            return <Archive />;
        if(screen === "Podcast")
            return <Podcast />;
        return <Hero />
    }
}