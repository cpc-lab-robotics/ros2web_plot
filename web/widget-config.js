const path = require("path");

const widget = {
  name: "plot",
  port: 3001,
  proxy: {
    "/api": "http://localhost:8080",
  },
  path: path.join(__dirname, "..", "ros2web_plot", "data", "widgets"),
  publicPath: "auto",
  exposes: {
    "Plot": "./src/Plot",
  }
};

module.exports = widget;