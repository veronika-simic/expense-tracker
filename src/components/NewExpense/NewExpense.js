import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData)
    }
  return (
    <>
      <h2>Add Expense</h2>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </>
  );
}

export default NewExpense;
