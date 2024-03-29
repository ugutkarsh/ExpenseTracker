import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/UI/Button';
import { getFormattedDate } from '.././components/ExpensesOutput/ExpenseItem';
import { GlobalStyles } from '../constants/styles';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';



const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel, defaultValues }) => {
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('select Date');

    const showDatePicker = () => {
        setDatePicker(true);
    }

    const onDateSelected = (event, value) => {
        setDatePicker(false);
        setDate(value);
        setSelectedDate(moment(value).format('DD-MM-YYYY'));
    }
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : getFormattedDate(new Date()),
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        },
    });

    const inputChangedHandler = (inputIdentifier, enteredValue) => {
        setInputs((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            };
        });
    };
    const submitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !descriptionIsValid || !dateIsValid) {
            //show feedback
            // Alert.alert('Invalid input', 'Please check your input values');
            setInputs((currInputs) => {
                return {
                    amount: { value: currInputs.amount.value, isValid: amountIsValid },
                    date: { value: currInputs.date.value, isValid: dateIsValid },
                    description: { value: currInputs.description.value, isValid: descriptionIsValid },
                }
            })
            return;
        }

        onSubmit(expenseData);

    };
    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;
    return (
        <View >
            <Text style={styles.text}>Your Expenses</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between",width:'100%' }}>
                <TouchableOpacity style={{ borderRadius: 5, marginTop: 20,width:'100%',backgroundColor:GlobalStyles.colors.primary800 }}>
                    {datePicker && (
                        <RNDateTimePicker
                            value={date}
                            mode={'date'}
                            display="default"
                            onChange={onDateSelected}
                        />
                    )}
                    <View style={{ margin: 10 }}>
                        <AntDesign name='calendar' color='#fff' size={20} onPress={showDatePicker} >{selectedDate}</AntDesign>
                    </View>

                </TouchableOpacity>


                {/* <Input
                    label="Date"
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }} /> */}
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Input
                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputs.amount.value,
                    }} />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Input
                    label="Description"
                    invalid={!inputs.description.isValid}
                    textInputConfig={{
                        multiline: true,
                        onChangeText: inputChangedHandler.bind(this, 'description'),
                        value: inputs.description.value,
                    }}
                />
            </View>
            {formIsInvalid &&
                <Text style={styles.errorText}>
                    Invalid input values - please check your values!
                </Text>}
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
    errorText: {
        textAlign: 'center',
        color: '#246BFD',
        margin: 8
    },
});