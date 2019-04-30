export const updateStringColor = (state = '', action) => {
  switch(action.type){
    case "UPDATE_STRING_COLOR":
      return action.hex;
    default:
      return state;
  }
}
