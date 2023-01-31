import React from "react";
import { Provider } from "react-redux";
import Default from "./routes";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Default />
    </Provider>
  );
}
