import { combineReducers } from "redux";
import socket from "./socketReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  socket,
  user,
});

export default rootReducer;
