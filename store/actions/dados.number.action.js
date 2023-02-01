export const dadosNumber = (number, code, view) => {
  return {
    type: "DadosNumber",
    payload: [number, code, view],
  };
};
