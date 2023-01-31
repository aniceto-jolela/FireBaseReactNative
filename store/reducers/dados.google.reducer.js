export default (state = "Principal", action) => {
  switch (action.type) {
    case "dadosGoogle":
      return action.payload;
    default:
      return state;
  }
};
