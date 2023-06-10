import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./App/";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
