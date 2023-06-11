import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./App/";

import "./Styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
