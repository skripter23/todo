import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoApp from "./App/";
import TodoProvider from "./App/context";
import NotificationProvider from "./Services/NotificationContext/context";

import "./Styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <NotificationProvider>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </NotificationProvider>
  </StrictMode>
);
