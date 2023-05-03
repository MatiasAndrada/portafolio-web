import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import App from "./App";

console.log("Starting to render");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Unable to find #root element");
  throw new Error("Unable to find #root element");
}

ReactDOM.render(<App />, rootElement);

console.log("Rendering done");