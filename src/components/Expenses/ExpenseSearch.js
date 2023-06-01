import "./ExpenseSearch.css";
import { useState } from "react";
import { useEffect } from "react";
import { useExpensesContext } from "../../hooks/useExpensesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
function ExpenseSearch() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const { user } = useAuthContext();
  const { expenses, dispatch } = useExpensesContext();
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch(`/api/expenses?title=${searchInput}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      
    };
    if (user) {
      fetchExpenses();
    }
  }, [dispatch, searchInput, expenses, user]);

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      {/* {searchInput.length === 0 && <p>No results found.</p>} */}
    </>
  );
}

export default ExpenseSearch;
