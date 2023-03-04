import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';
import { useState } from 'react';

const ExpenseForm = () => {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    const inputChangedHandler = (inputIdentifier, enteredValue) => {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
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
    }
});