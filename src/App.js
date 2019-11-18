import React from 'react';
import './App.css';
import JokeDisplay from './JokeDisplay/JokeDisplay';
import PersonalJokes from './OurPunchLines/PersonalJokes'

function App() {
  return (
    
    <div>
      <JokeDisplay />
      <PersonalJokes />
    </div>
  );
}

export default App;
