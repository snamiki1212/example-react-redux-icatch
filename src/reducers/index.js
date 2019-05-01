import { combineReducers } from 'redux';
import { updateBackgroundColor } from './backgroundColor';
import { updateStringColor } from './stringColor';
import { updateInputText } from './inputText';

export default combineReducers({
  updateBackgroundColor,
  updateStringColor,
  updateInputText,
});