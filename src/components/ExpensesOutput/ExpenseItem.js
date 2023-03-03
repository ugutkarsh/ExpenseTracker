import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import {useNavigation} from "@react-navigation/native";
export const getFormattedDate = (date) => {
    return (`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

const ExpenseItem = ({id, description, amount, date }) => {
    const navigation = useNavigation();
    const expensePressHandler = () => {
        navigation.navigate('ManageExpenses',{
            expenseId: id
        });
    }
    return (
        <Pressable onPress={expensePressHandler} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                           <Text style={styles.amount}>₹{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 6,
        borderBottomColor: "#fff",
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
    },
    pressed:{
        opacity : 0.75,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    amountContainer: {
        paddingHorizontal: 5,
        marginHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        minWidth: 90,
        
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontStyle: "normal",
        fontWeight: "bold",
    }
});