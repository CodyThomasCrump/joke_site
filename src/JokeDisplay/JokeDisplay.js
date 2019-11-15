import React, { Component } from 'react';
import axios from 'axios';
import './JokeDisplay.css';
import PersonalJokes from '../PersonalJokes/PersonalJokes';

class JokeDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = { joke: {} } ;
    }

    getJokes = () => {

    let _this = this;
        axios({
            method: 'GET',
            url: 'https://official-joke-api.appspot.com/random_joke'
        })
            .then(function (response) {
                _this.setState({ joke: { setup: response.data.setup, punchline: response.data.punchline }});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {


        return (
            <div>
                <PersonalJokes />
                <h1 className="randomJokes">Get Random Jokes</h1>
                <button className="randomJokesButton" onClick={this.getJokes}>Click Here for Random Jokes</button>
                <p>{this.state.setup}</p>
                <p>{this.state.punchline}</p>
            </div>
        )
    }
}

export default JokeDisplay