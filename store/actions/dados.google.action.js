export const dadosGoogle = (photoURL, displayName, email, view) => {
  return {
    type: "dadosGoogle",
    payload: [photoURL, displayName, email, view],
  };
};
