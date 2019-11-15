import React, { Component } from 'react';
import axios from 'axios';
// import PersonalJokes from '../PersonalJokes/PersonalJokes';
import './JokeDisplay.css';

class JokeDisplay extends Component {

    getJokes = () => {
        axios({
            // We can configure everything we need to know about the HTTP request in here
            method: 'GET',
            url: 'https://official-joke-api.appspot.com/random_joke'
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div className='random'>
                <h1>Get Random Joke</h1>
                <button onClick={this.getJokes}>Submit</button>
            </div>
        )
    }

}

export default JokeDisplay;