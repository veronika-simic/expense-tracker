import { ExpensesContext } from "../context/ExpensesContext";
import { useContext } from "react";

export const useExpensesContext = () => {
    const context = useContext(ExpensesContext)
    if(!context) {
        throw Error('useExpensesContext must be used iniside an ExpensesContextProvider')
    }
    return context
}