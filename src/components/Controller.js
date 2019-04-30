import React from 'react';
import creater from './creater';
import { SketchPicker } from 'react-color';

const handleChangeComplete = (color) => {
  console.log(color.hex);
  return {
    background: color.hex
  };
}

const Controller = () => {
  let backgroundColor = 'red';
  return(
    <div>
      Controller
      <SketchPicker
        color={backgroundColor}
        onChangeComplete={handleChangeComplete}
      />
      <button onClick={() => creater('my-node')}>CREATE</button>
      
      
    </div>
  )
}

export default Controller;