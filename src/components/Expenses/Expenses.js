import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <Card>
      {props.items.map((item) => (
        <ExpenseItem item={item} key={item.id} />
      ))}
    </Card>
  );
}

export default Expenses;
