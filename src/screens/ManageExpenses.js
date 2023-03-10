import { useContext, useLayoutEffect } from "react";
import { Alert, StyleSheet, View } from "react-native";
import ExpenseForm from "../ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenses = ({ route, navigation }) => {
    const createTwoButtonAlert = () =>
        Alert.alert('Do you want to delete the data', 'Press OK to continue', [
            {
                text: 'Cancel',
                onPress: () => navigation.goBack(),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => deleteExpenseHandler() },
        ]);

    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === editedExpenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = () => {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    };
    const cancelHandler = () => {
        navigation.goBack();
    };
    const confirmHandler = (expenseData) => {
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId, expenseData
            );
        } else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedExpense}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash-can"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={createTwoButtonAlert} />
                </View>
            )
            }
        </View>
    );
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    }
});