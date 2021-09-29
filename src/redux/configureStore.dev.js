import { applyMiddleware, createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Custom Redux Methods
import initialState from "./reducers/initialState";
import rootReducer from "./reducers/index";

//Middleware
import network from "./middleware/network";
import socket from "./middleware/socket";
import storage from "./middleware/storage";
import thunk from "redux-thunk";

const middleware = [thunk, network, socket, storage];

function configureStore(initialState) {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
  });
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export default {
  store: configureStore(initialState),
  ReduxProvider
};