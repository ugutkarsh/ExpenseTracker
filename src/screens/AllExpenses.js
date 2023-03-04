import { useContext } from 'react';
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpensesOuput expenses={expensesCtx.expenses} expensesPeriod="Total" />
    );
}

export default AllExpenses;