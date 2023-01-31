export const dadosGoogle = (photoURL, displayName, email) => {
  return {
    type: "dadosGoogle",
    payload: [photoURL, displayName, email],
  };
};
