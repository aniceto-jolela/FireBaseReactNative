import { combineReducers, createStore } from "redux";
import dadosGoogleReducer from "./reducers/dados.google.reducer";
import dadosEmailPasswordReducer from "./reducers/dados.email.password.reducer";
import dadosNumberReducer from "./reducers/dados.number.reducer";
import statusAppReducer from "./reducers/status.app.reducer";

const rootReducer = combineReducers({
  DadosGoogle: dadosGoogleReducer,
  DadosEmailPassword: dadosEmailPasswordReducer,
  DadosNumber: dadosNumberReducer,
  StatusApp: statusAppReducer,
});

const store = createStore(rootReducer);
export default store;
