import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOuput = ({ expenses, expensesPeriod, fallbackText }) => {
    let content =<Text style = {styles.infoText}>{fallbackText}</Text>

    if(expenses.length>0){
        content =<ExpensesList expenses={expenses} />
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    );
}

export default ExpensesOuput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700 //main background color
    },
    infoText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginTop: 32
    },
});