import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./App/";
import TodoProvider from "./App/context";

import "./Styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  </React.StrictMode>
);
