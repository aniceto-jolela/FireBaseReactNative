export const dadosEmailPassword = (email, password, view) => {
  return {
    type: "DadosEmailPassword",
    payload: [email, password, view],
  };
};
