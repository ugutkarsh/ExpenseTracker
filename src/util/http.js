import axios from 'axios';

const BACKEND_URL = 'https://expense-tracker-e9453-default-rtdb.firebaseio.com'
export const storeExpense = async (expenseData) => {
    const response = await axios.post(
        BACKEND_URL + '/expenses.json',
        expenseData
    );
    const id = response.data.name;
    return id;
}

export const fetchExpenses = async () => {
    const response = await axios.get(
        BACKEND_URL + '/expenses.json',
    );
    const expenses = [];

    console.log(response.data);

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        }
        expenses.push(expenseObj);
    }
    return expenses;
}