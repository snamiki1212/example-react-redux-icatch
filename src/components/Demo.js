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
          width: '400px',
          borderRadius: '10px',
          backgroundColor: backgroundColor,
          color: stringColor,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        onClick={() => console.log(backgroundColor)}
      >
        {inputText.split ('\n').map ((item, i) => <p style={{padding: 0, margin: 0 }} key={i}>{item}</p>)}
      </div>
    </div>
  );
};

export default Demo;