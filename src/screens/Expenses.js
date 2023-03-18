import { StyleSheet, Text, View, Button } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Expenses = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }}>This is Expenses Page</Text>
            <Button
                color="#9b095c"
                title='Recent Expenses'
                onPress={() => navigation.navigate('Recent Expenses')}
            />
            <Button
                color="#9b095c"
                title='All Expenses'
                onPress={() => navigation.navigate('All Expenses')}
            />
        </View>
    );
}

export default Expenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700
    }
});