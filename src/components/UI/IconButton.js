import { Pressable, View, StyleSheet } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({ icon, size, color, onPress }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75,
    }
});