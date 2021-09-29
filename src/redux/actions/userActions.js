const sendMessage = getState => {
  const { socket } = getState();
  return props => socket.send(JSON.stringify(props));
};
