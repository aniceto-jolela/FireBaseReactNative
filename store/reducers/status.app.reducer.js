export default (status = false, action) => {
  switch (action.type) {
    case "StatusApp":
      return action.payload;
    default:
      return status;
  }
};
