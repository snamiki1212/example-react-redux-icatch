import React from 'react';
import { GENERATER_INPUT_ID } from '../lib/generator';

const Demo = ({
  stringColor,
  backgroundColor,
  inputText,
}) => {
  return(
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
  );
};

export default Demo;