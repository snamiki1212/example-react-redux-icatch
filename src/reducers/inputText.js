export const updateInputText = (state = '', action) => {
  switch(action.type){
    case "UPDATE_INPUT_TEXT":
      return action.text;
    default:
      return state;
  }
}
