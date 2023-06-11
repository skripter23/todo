import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./App/";
import TodoProvider from "./App/context";
import NotificationProvider from "./Services/NotificationContext/context";

import "./Styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </NotificationProvider>
  </React.StrictMode>
);
