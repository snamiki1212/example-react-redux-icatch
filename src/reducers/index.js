import { combineReducers } from 'redux';
import { updateBackgroundColor } from './backgroundColor';
import { updateStringColor } from './stringColor';

export default combineReducers({
  updateBackgroundColor,
  updateStringColor
});