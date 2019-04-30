import React from 'react';
import { GENERATER_INPUT_ID } from '../lib/generator';

const Demo = ({ backgroundColor }) => {
  return(
    <div
      id={GENERATER_INPUT_ID}
      style={{ backgroundColor: backgroundColor}}
      onClick={() => console.log(backgroundColor)}
    >
      this is demo
    </div>
  );
};

export default Demo;