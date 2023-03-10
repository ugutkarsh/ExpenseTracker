import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from './Input';
import { useState } from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/UI/Button';
import { getFormattedDate } from '.././components/ExpensesOutput/ExpenseItem';

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel, defaultValues }) => {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : getFormattedDate(new Date()),
        description: defaultValues ? defaultValues.description : '',
    });

    const inputChangedHandler = (inputIdentifier, enteredValue) => {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    };
    const submitHandler = () => {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !descriptionIsValid || !dateIsValid) {
            //show feedback
            Alert.alert('Invalid input', 'Please check your input values');
            return;
        }

        onSubmit(expenseData);
    };
    return (
        <View >
            <Text style={styles.text}>Your Expenses</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Input label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount,
                }} />
                <Input label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date,
                }} />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Input label="Description" textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description,
                }} />
            </View>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
};

export default ExpenseForm;

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 25,
        marginVertical: 15,
        textDecorationLine: "underline",
        textAlign: "center"
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
});