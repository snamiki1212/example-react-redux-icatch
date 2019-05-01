import React from 'react';
import { connect } from 'react-redux';
import generate from '../lib/generator';
import { TwitterPicker } from 'react-color';
import { updateBackgroundColor, updateStringColor, updateInputText } from '../actions';

const Controller = ({
  // disaptch call-backs
  updateStringColor,
  updateBackgroundColor,
  updateInputText,

  // values
  stringColor,
  backgroundColor,
  inputText,
}) => {
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
      <input
        value={inputText}
        onChange={(e) => updateInputText(e.target.value)}
      />
      <br />
      <button onClick={() => generate()}>CREATE</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    backgroundColor: state.updateBackgroundColor,
    stringColor: state.updateStringColor,
    inputText: state.updateInputText,
  })

};

const mapDispatchToProps = (dispatch) => ({
  updateBackgroundColor: (hex) => dispatch(updateBackgroundColor(hex)),
  updateStringColor: (hex) => dispatch(updateStringColor(hex)),
  updateInputText: (text) => dispatch(updateInputText(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);