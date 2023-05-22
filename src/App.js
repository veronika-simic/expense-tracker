import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NewExpense from "./components/NewExpense/NewExpense";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import WithNav from "./routes/WithNav";

function App() {
  return (
    <Routes>
      <Route element={<WithNav />}>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/newexpense" element={<NewExpense />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
