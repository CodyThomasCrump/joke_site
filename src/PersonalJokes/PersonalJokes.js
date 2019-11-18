import React, { Component } from 'react';
import JokeDisplay from '../JokeDisplay/JokeDisplay';
import './PersonalJokes.css';
import '../OurPunchLines';

class PersonalJokes extends Component {
    render() {
        return (
            <div className='personal'>
                <h1>Get Personal Joke </h1>
                <button> Submit </button> 
            </div>
        )
    }
}

export default PersonalJokes