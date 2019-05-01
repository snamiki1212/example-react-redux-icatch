import React from 'react';
import { GENERATER_INPUT_ID } from '../lib/generator';

const Demo = ({
  stringColor,
  backgroundColor,
  inputText,
}) => {
  return(
    <div>
      <p
        style={{backgroundColor: 'lightgray', margin: '10px',}}
      >↓↓デモ↓↓</p>
      <div
        id={GENERATER_INPUT_ID}
        style={{
          height: '200px',
          width: '200px',
          borderRadius: '10px',
          backgroundColor: backgroundColor,
          color: stringColor,

          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => console.log(backgroundColor)}
      >
        {inputText}
      </div>
    </div>
  );
};

export default Demo;