import React, { useState } from 'react';

function BasicForm() {
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


export default BasicForm;