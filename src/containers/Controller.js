import React from 'react';
import { connect } from 'react-redux';
import creater from '../components/creater';
import { SketchPicker } from 'react-color';
import { updateBackgroundColor } from '../actions';

// const handleChangeComplete = (color) => {
//   console.log(color.hex);
//   dispatch(updateBackgroundColor(color.hex));
//   return {
//     background: color.hex
//   };
// }

const Controller = ({ updateBackgroundColor, backgroundColor }) => {
  return(
    <div>
      Controller
      <SketchPicker
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