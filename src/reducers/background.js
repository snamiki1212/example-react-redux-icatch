export const updateBackgroundColor = (state = '', action) => {
  switch(action.type){
    case "UPDATE_BACKGROUND_COLOR":
      return action.hex;
    default:
      return state;
  }
}

