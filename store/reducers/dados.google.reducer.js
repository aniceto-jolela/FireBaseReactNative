export default (state = "Google", action) => {
  switch (action.type) {
    case "dadosGoogle":
      return action.payload;
    default:
      return state;
  }
};
