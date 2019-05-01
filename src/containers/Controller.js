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
  const colorPickerCSS = {
    textAlign: 'left',
    padding: '10px',
  };

  return(
    <div style={{
      backgroundColor: 'lightgray',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '10px',
    }} >
      <div style={colorPickerCSS}>
        <p>背景色(BackgroundColor)</p>
        <TwitterPicker
          color={backgroundColor}
          onChangeComplete={(color) => updateBackgroundColor(color.hex)}
        />
      </div>
      <textarea
        value={inputText}
        type='textarea'
        onChange={(e) => updateInputText(e.currentTarget.value)}
        style={{padding: '10px', }}
      />
      <div style={colorPickerCSS}>
        <p>文字色(Color)</p>
        <TwitterPicker
          color={stringColor}
          onChangeComplete={(color) => updateStringColor(color.hex)}
        />
      </div>

      <br />
      <button
        style={{ width: '100%', padding: '10px', }}
        onClick={() => generate()}
      >
        CREATE
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
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