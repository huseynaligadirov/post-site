import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import "./photos.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
const store = legacy_createStore(Reducer);
import { Provider } from "react-redux";
import Reducer from "./store/Reducer";
import { legacy_createStore } from "redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>

  </Provider>
  
);
