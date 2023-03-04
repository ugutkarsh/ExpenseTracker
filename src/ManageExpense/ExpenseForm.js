import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
    const amountChangeHandler = () => { };
    return (
        <View >
            <Text style={styles.text}>Your Expenses</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Input label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler,
                }} />
                <Input label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { }
                }} />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Input label="Description" textInputConfig={{
                    multiline: true,
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