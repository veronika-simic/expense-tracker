import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import ExpenseSearch from "../../Expenses/ExpenseSearch";
import ExpensesAmount from "../../Expenses/ExpensesAmount";
import Expenses from "../../Expenses/Expenses";
import { useState } from "react";
import NavigationBar from "../../NavigationBar/NavigationBar";
function HomePage() {
  const expenses = [
    { id: 1, title: "Dog food", amount: 24.56, date: new Date(2023, 2, 3) },
    { id: 2, title: "Cat food", amount: 32.56, date: new Date(2023, 2, 3) },
    {
      id: 3,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 4,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 5,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 6,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
    {
      id: 7,
      title: "Human food",
      amount: 124.56,
      date: new Date(2023, 2, 3),
    },
  ];
  const navigate = useNavigate();
  const navigateToNewExpense = () => {
    navigate("/newexpense");
  };
  const [newExpenses, setNewExpenses] = useState(expenses);

  return (
    <div className="home-page">
      <ExpenseSearch></ExpenseSearch>
      <ExpensesAmount items={newExpenses} />
      <Expenses items={newExpenses}></Expenses>
      <button onClick={navigateToNewExpense}>+</button>
    </div>
  );
}

export default HomePage;
