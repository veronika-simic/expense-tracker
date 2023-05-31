import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import NewExpense from "./components/NewExpense/NewExpense";
import HomePage from "./pages/Home/HomePage";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import WithNav from "./routes/WithNav";
import ExpenseItemDashboard from "./pages/ExpenseItemDashboard/ExpenseItemDashboard";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import FormContainer from "./components/Form/FormContainer";

function App() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route element={<WithNav />}>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/form" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/newexpense" element={<NewExpense />} />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route path="/:id" element={<ExpenseItemDashboard />} />
        <Route path="update/:id" element={<ExpenseForm />} />
        <Route path="/form" element={<FormContainer/>}/>
      </Route>
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
