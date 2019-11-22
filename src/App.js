import React from 'react';
import './App.css';
import JokeDisplay from './JokeDisplay/JokeDisplay';
import PersonalJokes from './OurPunchLines/PersonalJokes'
import Meme from './nevergoingtogiveyouup.gif';
import Surprise from './clickme.png'; 
import WebM from './clickme.png';

function App() {
  return (
    
    <div>
      <JokeDisplay />
      <PersonalJokes />
      <h1 className="mainheader">Bad puns and jokes incoming!</h1>
      <h4 className="members"><a href="https://lh3.googleusercontent.com/8b-hyhOQeoKwDiL4ePv4eKlK9BUqrF4iWOZmGEjujfCx0w1GrUfOncnJ87zmtx4C_s5123UZIWcjQtlPFCGXhQX6my-ndbPZkAPwhJfbBVwrXkhtUbrtOz9T0v53HLDQx4rcTN-ehg" target="_blank">Project Members</a></h4>
      <a href='https://files.slack.com/files-pri/TLLJ8TVTM-FQVN13QSC/image.png' target="_blank" className="WebM"><img src={WebM} style={{width: '2em', height: '3em'}}></img></a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="rickroll" ><img src={Meme}></img></a>
      <a href="https://www.youtube.com/watch?v=iXdtz-YYfE0" target="_blank" className="clickme"><img src={Surprise}></img></a>
    </div>
  );
}

export default App;
