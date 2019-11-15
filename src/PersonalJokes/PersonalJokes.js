import React, { Component } from 'react';
import './PersonalJokes.css'

class PersonalJokes extends Component {
    render() {
        return (
            <div>
                <h1 className="randomPun">Get Random Pun</h1>
                <button className="randomPunButton">Click Here For Random Puns</button>
            </div>
        )
    }
}

export default PersonalJokes