import { applyMiddleware, createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

//Custom Redux Methods
import rootReducer from "./reducers/index";
import initialState from "./reducers/initialState";

//Middleware
import network from "./middleware/network";
import socket from "./middleware/socket";
import storage from "./middleware/storage";
import thunk from "redux-thunk";

const middleware = [thunk, network, socket, storage];

function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}

export default {
  ReduxProvider,
  store: new configureStore(initialState)
};