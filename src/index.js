import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ExpensesContextProvider } from "./context/ExpensesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ExpensesContextProvider>
      <ToastContainer position="bottom-left" theme="light" autoClose={2000} />
      <App />
    </ExpensesContextProvider>
  </BrowserRouter>
);
