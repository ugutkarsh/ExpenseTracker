import { useEffect, useContext } from 'react';
import { getDateMinusDays } from "../components/ExpensesOutput/ExpenseItem";
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from '../store/expenses-context';

const RecentExpenses = () => {
    const expensesCtx = useContext(ExpensesContext);


    useEffect(() => {
        const getExpenses = async () => {
            const expenses = await fetchExpenses();
            expensesCtx.setExpenses(expenses);
        }
        getExpenses();
    }, []);


    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    })
    return (
        <ExpensesOuput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days" />
    )
}

export default RecentExpenses;