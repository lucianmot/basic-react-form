import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import BasicForm from './Components/BasicForm';

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input onChange={(e) => {
        setInputText(e.target.value);
      }}
        placeholder="Tell me your name" />
      <br />
      <p>Hello {inputText}</p>

    </div>
  );
}


export default App;
