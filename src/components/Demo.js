import React from 'react';
import { GENERATER_INPUT_ID } from '../lib/generator';

const Demo = ({ stringColor, backgroundColor }) => {
  return(
    <div
      id={GENERATER_INPUT_ID}
      style={{
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