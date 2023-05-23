import { useState } from "react";
import "./ExpenseTitle.css";
function ExpenseTitle({sendTitle}) {
  const [title, setTitle] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value.trim());
    sendTitle(title)
  }
  return (
    <div className="title-container">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={titleChangeHandler}
        id="title"
        placeholder="Money spent on...."
        maxLength={15}
        required
        onInvalid={(e) => e.target.setCustomValidity("Title is required")}
        onInput={(e) => e.target.setCustomValidity("")}
      ></input>
    </div>
  );
}
export default ExpenseTitle;
