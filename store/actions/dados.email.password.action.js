export const dadosEmailPassword = (email, password) => {
  return {
    type: "DadosEmailPassword",
    payload: [email, password],
  };
};
