import React from 'react';
import './App.css';
import JokeDisplay from './JokeDisplay/JokeDisplay';
import PersonalJokes from './PersonalJokes/PersonalJokes';
import OurPunchLines from './OurPunchLines';


function App() {
  
  constructor(props) {
    super(props);
    this.state= {
      OurPunchLines: OurPunchLines[0].OurPunchLines,
    }
  }

  return (
    
    <div>
      <JokeDisplay />
      <PersonalJokes />
      
    </div>
  );
}

export default App;
