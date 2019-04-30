import React from 'react';

const Demo = ({ backgroundColor }) => {
  return(
    <div style={{ backgroundColor: backgroundColor}} onClick={() => console.log(backgroundColor)}>
      this is demo
    </div>
  );
};

export default Demo;