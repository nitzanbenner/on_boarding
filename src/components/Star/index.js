import React, {Component} from 'react';
import classnames from 'classnames';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: props.x,
            y: props.y,
            direction: 1,
            animate: false
        }
    }

    componentWillReceiveProps() {
        this.moveStar();
    }

    moveStar() {
        const {size} = this.props;
        const windowSize = window.outerWidth;
        const boundaryExtra = 10;

        let step = 'small';

        if (size === 'big') {
            step = 400;
        } else if (size === 'mid') {
            step = 200;
        } else {
            step = 50;
        }

        let left = this.state.x + (step * this.state.direction);
        let backToStart = 0;

        if(left > windowSize){
            backToStart = windowSize - left;
            left = windowSize+boundaryExtra;
        }

        this.setState({
            animate: true,
            x: left
        });

        if(backToStart !== 0){
            setTimeout(() => {
                this.setState({
                    animate: false,
                    x: backToStart
                });
            }, 1000);
        }
    }

    render() {
        const style = {
            left: this.state.x,
            top: this.state.y
        }
        const classes = classnames('single-star', [`size-${this.props.size}`], {animate: this.state.animate});

        return (
            <div ref={(el) => this.instance = el} className={classes} style={style}>
            </div>
        )
    }
}

export default Star;