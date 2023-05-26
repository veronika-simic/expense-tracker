import "./App.css";
import { Routes, Route } from "react-router-dom";

import NewExpense from "./components/NewExpense/NewExpense";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import WithNav from "./routes/WithNav";
import ExpenseItemDashboard from "./pages/ExpenseItemDashboard/ExpenseItemDashboard";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

function App() {
  return (
    <Routes>
      <Route element={<WithNav />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newexpense" element={<NewExpense />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:id" element={<ExpenseItemDashboard />} />
        <Route path="update/:id" element={<ExpenseForm />} />
      </Route>
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
