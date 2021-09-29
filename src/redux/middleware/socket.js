import * as types from "../actions/actionTypes";
import axios from "axios";

const socketMiddleware = store => {
  var pingtimer = null;
  var resetTimer = null;
  var socket = null;

  //Every 15 seconds, ping server to keep connection alive
  const startPingPong = () => {
    try {
      pingtimer = setInterval(() => {
        if (!socket) return clearTimeout(pingtimer);
        if (socket.readyState === 1) {
          socket.send(JSON.stringify({ message: "ping" }));
        } else pingtimer && clearTimeout(pingtimer);
      }, 15000);
    } catch (e) {
      console.log("Ping Pong Error: ", e);
      clearTimeout(pingtimer);
    }
  };

  const resetSocket = () => {
    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      store.dispatch({
        auth: { refresh: true },
        type: types.AUTH_STATUS_CHANGE
      });
    }, 10000);
  };

  return next => action => {
    switch (action.type) {
      case types.ESTABLISH_SOCKET_CONNECTION:
        try {
          socket = null;
          socket = new WebSocket(
            `${process.env.REACT_APP_AWS_SOCKET_ENDPOINT}?idToken=${axios.defaults.headers.common.Authorization}`
          );

          socket.onerror = e => {
            console.log("Socket Error: ", e);
          };

          //All inbound messages, dispatch to necessary redux action
          socket.onmessage = e => {
            let data = {};
            if (e.data && typeof e.data === "string") {
              try {
                data = JSON.parse(e.data);
              } catch (e) {
                console.log("Socket Error: ", e);
                data = e.data;
              }
              if (data) {
                if (data.message === "Endpoint request timed out") {
                  resetSocket();
                } else if (data.message === "Internal server error") {
                  console.log("Request failed...");
                } else if (data.type) store.dispatch(data);
              }
            }
          };

          //Dispatch State Changes Straight to the Reducer
          socket.onopen = () => {
            console.log("Connected...");
            startPingPong();
            store.dispatch({ online: true, type: types.SET_DEVICE_STATUS });
            store.dispatch({ type: types.SET_SOCKET_CONSTRUCTOR, socket });
          };

          socket.onclose = () => {
            console.log("Closed...");
            resetSocket();
          };
        } catch (e) {
          console.log("WebSocket Error: ", e);
        }

        break;
      case types.FORCE_SOCKET_DISCONNECT:
        console.log("Socket Forced Closed...");
        if (socket) socket.close();
        socket = null;
        break;
    }
    return next(action);
  };
};
export default socketMiddleware;
