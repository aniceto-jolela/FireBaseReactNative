export default (state = "Number", action) => {
  switch (action.type) {
    case "DadosNumber":
      return action.payload;
    default:
      return state;
  }
};
