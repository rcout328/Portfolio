import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import Approuter from "./Components/Approuter.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
//import { Counter } from "./redux/features/Counter.jsx";
import Approuter from "./Components/Approuter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Approuter />
    </Provider>
  </React.StrictMode>
);
