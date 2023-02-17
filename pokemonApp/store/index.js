import { legacy_createStore as createStore, applyMiddleware } from "redux";
import pokemonReducer from "./reducers/pokemonReducer";
import thunk from "redux-thunk";

const store = createStore(pokemonReducer, applyMiddleware(thunk))

export default store