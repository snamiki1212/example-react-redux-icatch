import React from 'react';
import { connect } from 'react-redux';
import generate from '../lib/generator';
import { TwitterPicker } from 'react-color';
import { updateBackgroundColor, updateStringColor } from '../actions';

const Controller = ({ updateStringColor, updateBackgroundColor, stringColor, backgroundColor }) => {
  return(
    <div style={{ backgroundColor: 'lightgray' }}>
      Controller
      <TwitterPicker
        color={backgroundColor}
        onChangeComplete={(color) => updateBackgroundColor(color.hex)}
      />
      <TwitterPicker
        color={stringColor}
        onChangeComplete={(color) => updateStringColor(color.hex)}
      />
      { backgroundColor}
      <button onClick={() => generate()}>CREATE</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    backgroundColor: state.updateBackgroundColor,
    stringColor: state.updateStringColor,
  })

};

const mapDispatchToProps = (dispatch) => ({
  updateBackgroundColor: (hex) => dispatch(updateBackgroundColor(hex)),
  updateStringColor: (hex) => dispatch(updateStringColor(hex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);