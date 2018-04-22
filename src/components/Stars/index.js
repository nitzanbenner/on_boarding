import React, {Component} from 'react';
import Star from '../Star/';


class StarsContainer extends Component {
    constructor(props) {
        super(props);

        const starsBig = [];
        const starsMid = [];
        const starsSmall = [];

        const boundaryExtra = 10;
        const boundaryWidth = window.outerWidth + boundaryExtra;
        const boundaryHeight = window.outerHeight + boundaryExtra;

        let i;
        let x;
        let y;

        for (i = 0; i < 30; i++) {
            x = this.getRandomInt(-boundaryExtra, boundaryWidth);
            y = this.getRandomInt(-boundaryExtra, boundaryHeight);
            starsBig.push(<Star key={`starbig-${i}`} x={x} y={y}
                                size="big" speed={50}>
            </Star>);
        }

        for (i = 0; i < 40; i++) {
            x = this.getRandomInt(-boundaryExtra, boundaryWidth);
            y = this.getRandomInt(-boundaryExtra, boundaryHeight);
            starsBig.push(<Star key={`starmid-${i}`} x={x} y={y}
                                size="mid" speed={50}>
            </Star>);
        }

        for (i = 0; i < 200; i++) {
            x = this.getRandomInt(-boundaryExtra, boundaryWidth);
            y = this.getRandomInt(-boundaryExtra, boundaryHeight);
            starsBig.push(<Star key={`starsmall-${i}`} x={x} y={y}
                                size="small" speed={50}>
            </Star>);
        }

        this.state = {
            starsBig: starsBig,
            starsMid: starsMid,
            starsSmall: starsSmall
        }
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    render() {

        return (
            <div className={`stars-container`}>
                { this.state.starsBig.map((star)=> {
                    return React.cloneElement(
                        star,
                        {
                            direction: 1
                        }
                    )
                }) }
                { this.state.starsMid.map((star)=> {
                    return React.cloneElement(
                        star,
                        {
                            direction: 1
                        }
                    )
                })  }
                { this.state.starsSmall.map((star)=> {
                    return React.cloneElement(
                        star,
                        {
                            direction: 1
                        }
                    )
                }) }
            </div>
        )
    }
}

export default StarsContainer;