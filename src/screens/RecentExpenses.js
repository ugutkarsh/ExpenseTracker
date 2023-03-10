import { useEffect, useContext, useState } from 'react';
import { getDateMinusDays } from "../components/ExpensesOutput/ExpenseItem";
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from '../store/expenses-context';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const expensesCtx = useContext(ExpensesContext);


    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true);
            try {

                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError('Could not fetch expenses!');
            }
            setIsFetching(false);
        }
        getExpenses();
    }, []);

  

    if (error && !isFetching) {
        return <ErrorOverlay message={error}/>
    }
    if (isFetching) {
        return <LoadingOverlay />
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