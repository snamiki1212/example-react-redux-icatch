import { connect } from 'react-redux';
import Demo from '../components/Demo';

const mapStateToProps = (state) => ({
  backgroundColor: state.updateBackgroundColor,
  stringColor: state.updateStringColor,
  inputText: state.updateInputText,
});

const mapDispatchToProps = (dispatch) => ({
  // 
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)