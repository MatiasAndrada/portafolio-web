import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Unable to find #root element");
}

ReactDOM.createRoot(rootElement).render(<App />);
