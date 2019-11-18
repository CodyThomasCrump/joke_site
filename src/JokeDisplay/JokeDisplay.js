import React, { Component } from 'react';
import axios from 'axios';
// import PersonalJokes from '../PersonalJokes/PersonalJokes';
import './JokeDisplay.css';

class JokeDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = { joke: {} }
    }

    getJokes = () => {

        let _this = this;

        axios({
            // We can configure everything we need to know about the HTTP request in here
            method: 'GET',
            url: 'https://official-joke-api.appspot.com/random_joke'
        })
        .then(function (response) {
            console.log(response);
            _this.setState({ joke: { setup: response.data.setup, punchline: response.data.punchline }});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div classNam e='random'>
                <h1>Get Random Joke</h1>
                <button onClick={this.getJokes}>Click here for a random joke :)</button>
                <p>{this.state.joke.setup}</p>
                <p>{this.state.joke.punchline}</p>
            </div>
        )
    }

}

export default JokeDisplay;