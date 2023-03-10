import { useEffect, useContext, useState } from 'react';
import { getDateMinusDays } from "../components/ExpensesOutput/ExpenseItem";
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from '../store/expenses-context';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(true);
    const expensesCtx = useContext(ExpensesContext);


    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true);
            const expenses = await fetchExpenses();
            setIsFetching(false);
            expensesCtx.setExpenses(expenses);
        }
        getExpenses();
    }, []);

    if (isFetching) {
        return <LoadingOverlay/>
    }


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