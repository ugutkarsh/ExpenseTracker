import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                    <Text style={{ fontSize: 30, textDecorationLine: 'underline', color: '#fff' }}>
                        Log In
                    </Text>
                </View>
                    <Text style={styles.text}>Email Address</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Enter Email Address"
                    />
                    <Ionicons name='mail' size={25}  style={styles.icon}/>
                </View>

                    <Text style={styles.text}>Password</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                    />
                    <Ionicons name="lock-closed" size={25}  style={styles.icon}/>
                </View>

                <View style={{ marginVertical: 10, borderRadius: 10 }}>
                    <Button
                        color="#246BFD"
                        title='Log In'
                        onPress={() => navigation.replace('Expenses Overview')}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Pressable
                        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                        onPress={() => navigation.replace('SignUp')}
                    >
                        <Text style={{ color: '#246BFD', textDecorationLine: 'underline' }}>
                            Sign up instead
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 40,
        backgroundColor: GlobalStyles.colors.primary700,
        color: '#fff',
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
        marginTop: 10
    },
    icon:{
        position: 'absolute',
        marginTop: 16,
        left: 10
    },

    text: {
        color: '#fff',
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer: {
        backgroundColor: GlobalStyles.colors.primary800,
        padding: 20,
        borderRadius: 20,
        fontSize: 18,
        elevation: 5,
        width: 350,
        color: GlobalStyles.colors.primary700

    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    pressed: {
        opacity: 0.7,
    },
});