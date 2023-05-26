function ExpensesAmount(props) {
  let item  = ' item'
  if (props.length > 1) {
    item = ' items'
  }
  return (
    <div>
      <h2>
        You spent $ {props.items
          .map((item) => {
            return item.total;
          })
          .reduce((prev, curr) => {
            return prev + curr;
          }).toFixed(2)} <br/> in total of {props.items.length + item} 
      </h2>
    </div>
  );
}

export default ExpensesAmount;
