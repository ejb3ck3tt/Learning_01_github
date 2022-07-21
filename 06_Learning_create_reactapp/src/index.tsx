// import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Store from "./state/store";
import App from "./components/App";
import "./css/index.css";

const store = Store();
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
