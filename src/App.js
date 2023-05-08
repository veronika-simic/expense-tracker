import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {id: 1, title: "Dog food", amount: "$24.56", date: new Date(2023, 2, 3) },
    {id: 2, title: "Cat food", amount: "$32.56", date: new Date(2023, 2, 3) },
    {id: 3, title: "Human food", amount: "$124.56", date: new Date(2023, 2, 3) },
  ];
  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
