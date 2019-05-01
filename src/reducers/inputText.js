export const updateInputText = (state = "Hi, I'm Nash.\nLet's create IMG🚀", action) => {
  switch(action.type){
    case "UPDATE_INPUT_TEXT":
      return action.text;
    default:
      return state;
  }
}
