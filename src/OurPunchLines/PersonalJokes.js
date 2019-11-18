import React, { Component } from 'react';
import './PersonalJokes.css';
import punchLines from './OurPunchLines';

class PersonalJokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setup: punchLines.setup,
            punchline: punchLines.punchline
        }
    }

    getRandomPun() {
        const randomPunIndex = Math.floor(Math.random() * punchLines.length);
        return punchLines[randomPunIndex];
    }

    handleClick = () => {
        const randomPun = this.getRandomPun();
        this.setState({
            setup: randomPun.setup,
            punchline: randomPun.punchline
        });
    }

    render() {
        return (
            <div className="punContainer">
                <h1 className="randomPun">Get Random Puns</h1>
                <button className="randomPunButton">Click Here For Random Puns</button>
                <p>{this.state.setup}</p>
                <p>{this.state.punchline}</p>
            </div>
        )
    }
}

export default PersonalJokes;
