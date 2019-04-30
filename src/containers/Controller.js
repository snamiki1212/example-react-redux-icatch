import React from 'react';
import { connect } from 'react-redux';
import creater from '../components/creater';
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
      <button onClick={() => creater('my-node')}>CREATE</button>
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