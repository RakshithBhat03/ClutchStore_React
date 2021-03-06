import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ScrollToTop } from "./components";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ScrollToTop />
    </Provider>
  </BrowserRouter>
);
