import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Report = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }}>This is Report Page</Text>
            <Text style={{ color: '#fff' }}>This is Report Page</Text>
            <Text style={{ color: '#fff' }}>This is Report Page</Text>
          
        </View>
    );
}

export default Report;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: GlobalStyles.colors.primary700
    }
});