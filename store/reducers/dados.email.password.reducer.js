export default (state = "Email/Password", action) => {
  switch (action.type) {
    case "DadosEmailPassword":
      return action.payload;
    default:
      return state;
  }
};
