function ExpensesAmount(props) {
  return (
    <div>
      <h2>
        You spent $ {props.items
          .map((item) => {
            return item.amount;
          })
          .reduce((prev, curr) => {
            return prev + curr;
          }).toFixed(2)} in total of {props.items.length} items
      </h2>
    </div>
  );
}

export default ExpensesAmount;
