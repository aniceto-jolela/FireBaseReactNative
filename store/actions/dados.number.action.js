export const dadosNumber = (number, code) => {
  return {
    type: "DadosNumber",
    payload: [number, code],
  };
};
