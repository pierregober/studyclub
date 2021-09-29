if (process.env.NODE_ENV === "development") {
  module.exports = require("./reducers/configureStore.dev");
} else module.exports = require("./configureStore.prod");