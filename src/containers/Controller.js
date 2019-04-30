import React from 'react';
import { connect } from 'react-redux';
import generate from '../lib/generator';
import { TwitterPicker } from 'react-color';
import { updateBackgroundColor } from '../actions';

const Controller = ({ updateBackgroundColor, backgroundColor }) => {
  return(
    <div>
      Controller
      <TwitterPicker
        color={backgroundColor}
        onChangeComplete={(color) => updateBackgroundColor(color.hex)}
      />
      { backgroundColor}
      <button onClick={() => generate('my-node')}>CREATE</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({ backgroundColor: state.updateBackgroundColor })
};

const mapDispatchToProps = (dispatch) => ({
  updateBackgroundColor: (hex) => dispatch(updateBackgroundColor(hex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);