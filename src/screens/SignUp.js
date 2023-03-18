import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../constants/styles';

const SignUp = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [confirmEmail, onConfirmEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                    <Text style={{ fontSize: 30, textDecorationLine: 'underline', color: '#fff' }}>
                        Sign Up
                    </Text>
                </View>
                <Text style={styles.text}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Enter Email Address"
                />
                <Text style={styles.text}>Re-Enter Email Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onConfirmEmail}
                    value={confirmEmail}
                    placeholder="Re-Enter Email Address"
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Enter Password"
                />
                <Text style={styles.text}>Re-Enter Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onConfirmPassword}
                    value={confirmPassword}
                    placeholder="Re-Enter Password"
                />
                <View style={{marginVertical:10}}>
                <Button
                    color="#246BFD"
                    title='Log In'
                    onPress={() => navigation.replace('Expenses Overview')}
                />
                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Pressable
                        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                        onPress={() => navigation.replace('Login')}
                    >
                        <Text style={{ color: '#246BFD', textDecorationLine: 'underline' }}>
                            Log In instead
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary700,
        color: '#fff',
        borderRadius: 8,
        width:'100%',
        marginBottom: 20,
        marginTop: 10
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
        
        // backgroundColor:'#4b4e54',
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