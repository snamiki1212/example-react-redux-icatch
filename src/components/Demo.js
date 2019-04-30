import React from 'react';
import { GENERATER_INPUT_ID } from '../lib/generator';

const Demo = ({ stringColor, backgroundColor }) => {
  return(
    <div
      id={GENERATER_INPUT_ID}
      style={{
        height: '200px',
        width: '200px',
        borderRadius: '10px',
        marginTop: '100px',
        backgroundColor: backgroundColor,
        color: stringColor
      }}
      onClick={() => console.log(backgroundColor)}
    >
      this is demo
    </div>
  );
};

export default Demo;