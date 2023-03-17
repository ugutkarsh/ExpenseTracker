import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Account = () => {
    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
        </View>);
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700
    },
});
