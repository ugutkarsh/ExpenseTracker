import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Account = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Account
                    </Text>
                </View>
            </Pressable>

            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Account
                    </Text>
                </View>
            </Pressable>

            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Account
                    </Text>
                </View>
            </Pressable>

            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Account
                    </Text>
                </View>
            </Pressable>
        </View>);
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700
    },
    button: {
        borderRadius: 4,
        padding: 8,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyles.colors.primary500,
        margin: 10
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.primary200,
    },
    pressed: {
        opacity: 0.7,
        borderRadius: 5
    }
});
