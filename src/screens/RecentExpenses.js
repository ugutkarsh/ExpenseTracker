import { Text, View } from "react-native"
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
    return (
        <ExpensesOuput expensesPeriod="Last 7 Days"/>
        )
}

export default RecentExpenses;