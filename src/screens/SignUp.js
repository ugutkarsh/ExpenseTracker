import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { GlobalStyles } from '../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Enter Email Address"
                    />
                    <Ionicons name='mail' size={25} style={styles.icon} />
                </View>
                <Text style={styles.text}>Re-Enter Email Address</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onConfirmEmail}
                        value={confirmEmail}
                        placeholder="Re-Enter Email Address"
                    />
                    <Ionicons name='mail' size={25} style={styles.icon} />
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
                    <Ionicons name="lock-closed" size={25} style={styles.icon} />
                </View>
                <Text style={styles.text}>Re-Enter Password</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry={true}
                        placeholder="Re-Enter Password"
                    />
                    <Ionicons name="lock-closed" size={25} style={styles.icon} />
                </View>
                <View style={{ marginVertical: 10 }}>
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
        paddingHorizontal: 40,
        backgroundColor: GlobalStyles.colors.primary700,
        color: '#fff',
        borderRadius: 8,
        width: '100%',
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
    icon: {
        position: 'absolute',
        marginTop: 16,
        left: 10
    },
});

// SADADADASDSADASDASDADSA///////////////ASD////////////////ASD///////////////////ASD////////////////////////ASD/ASD///////////////SADASD////////////////       //  /////////////////// /   /////////////////// /////////////////// /////////////////// /////////////////// /////////////////// /////////////////////////////////// /   /   /   ////////    //////////////////////////////////DDSDDDASDSAD//////SAD/ASDD/ASD/ADS/AS/DSA/ADS/ADS/ADS/ASD/DAS/DAS/DASDAS/DSA/ADSAD/SASD/A/SDAS/DS/ADSADS/ADA/DS/ADS/ASD/DAS/A/DS/ASDDSA/SAD/DAS/ASD/SA/D/SAD/ASD/ASDASD/ADSDASSADDSADAS/DAS/D/SAS//DASAS/ADS/DAS/DSA/D/SA/DSD/A/ADSDA/SA/SSA/SA/AS/ADS/ADS/ADS

// import React, { useState } from 'react';
// import {
//     SafeAreaView,
//     View,
//     Text,
//     TextInput,
//     TouchableHighlight,
//     ActivityIndicator,
//     Alert,
//     StyleSheet
// } from 'react-native';
// import { GlobalStyles } from '../constants/styles';
// import auth from '@react-native-firebase/auth';

// const SignUp = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [fetching, setFetching] = useState(false);
//     const [error, setError] = useState('');
//     const [isValid, setValid] = useState(true);

//     const __isValidEmail = email => {
//         // Function to validate email address
//         return /\S+@\S+\.\S+/.test(email);
//     };

//     const __doSignUp = () => {
//         if (!email) {
//             setError('Email required *');
//             setValid(false);
//             return;
//         } else if (!password && password.trim() && password.length > 6) {
//             setError('Weak password, minimum 5 chars');
//             setValid(false);
//             return;
//         } else if (!__isValidEmail(email)) {
//             setError('Invalid Email');
//             setValid(false);
//             return;
//         }

//         __doCreateUser(email, password);
//     };

//     const __doCreateUser = async (email, password) => {
//         try {
//             setFetching(true);
//             let response = await auth().createUserWithEmailAndPassword(email, password);
//             if (response && response.user) {
//                 Alert.alert('Success ✅', 'Account created successfully');
//             }
//         } catch (e) {
//             console.error(e.message);
//         } finally {
//             setFetching(false);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.containerStyle}>
//             <View style={{ flex: 0.2 }}>
//                 {fetching && <ActivityIndicator color={blue} />}
//             </View>
//             <View style={styles.headerContainerStyle}>
//                 <Text style={styles.headerTitleStyle}> Sign Up </Text>
//             </View>
//             <View style={styles.formContainerStyle}>
//                 <TextInput
//                     label={'Email'}
//                     autoCapitalize={false}
//                     keyboardType="email-address"
//                     style={styles.textInputStyle}
//                     placeholder="Mail address"
//                     onChangeText={text => {
//                         setEmail(text);
//                         setError('');
//                         setValid(true);
//                     }}
//                     error={!isValid}
//                 />

//                 <TextInput
//                     label={'Password'}
//                     secureTextEntry
//                     autoCapitalize={false}
//                     style={styles.textInputStyle}
//                     selectionColor='blue'
//                     placeholder="Password"
//                     error={!isValid}
//                     onChangeText={text => {
//                         setPassword(text);
//                         setError('');
//                         setValid(true);
//                     }}
//                 />
//             </View>
//             {error ? (
//                 <View style={styles.errorLabelContainerStyle}>
//                     <Text style={styles.errorTextStyle}>{error}</Text>
//                 </View>
//             ) : null}
//             <View style={styles.signInButtonContainerStyle}>
//                 <TouchableHighlight
//                     style={styles.signInButtonStyle}
//                     onPress={__doSignUp}
//                     underlayColor='blue'>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                         <Text style={styles.signInButtonTextStyle}>Continue</Text>
//                     </View>
//                 </TouchableHighlight>
//             </View>
//         </SafeAreaView>
//     );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//     input: {
//         height: 40,
//         borderWidth: 1,
//         padding: 10,
//         paddingHorizontal: 40,
//         backgroundColor: GlobalStyles.colors.primary700,
//         color: '#fff',
//         borderRadius: 8,
//         width: '100%',
//         marginBottom: 20,
//         marginTop: 10
//     },
//     headerTitleStyle: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     signInButtonTextStyle: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     errorTextStyle: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     containerStyle: {
//         flex: 1,
//         padding: 24,
//         backgroundColor: GlobalStyles.colors.primary700,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     formContainerStyle: {
//         backgroundColor: GlobalStyles.colors.primary800,
//         padding: 20,
//         borderRadius: 20,
//         fontSize: 18,
//         elevation: 5,
//         width: 350,
//         color: GlobalStyles.colors.primary700
//     },
//     textInputStyle: {
//         backgroundColor: GlobalStyles.colors.primary800,
//         padding: 20,
//         borderRadius: 20,
//         fontSize: 18,
//         elevation: 5,
//         width: 350,
//         color: GlobalStyles.colors.primary700
//     },
//     errorLabelContainerStyle: {
//         backgroundColor: GlobalStyles.colors.primary800,
//         padding: 20,
//         borderRadius: 20,
//         fontSize: 18,
//         elevation: 5,
//         width: 350,
//         color: GlobalStyles.colors.primary700
//     },
//     signInButtonContainerStyle: {
//         backgroundColor: GlobalStyles.colors.primary800,
//         padding: 20,
//         borderRadius: 20,
//         fontSize: 18,
//         elevation: 5,
//         width: 350,
//         color: GlobalStyles.colors.primary700
//     },
//     signInButtonStyle: {
//         paddingVertical: 6,
//         paddingHorizontal: 12,
//     },
//     pressed: {
//         opacity: 0.7,
//     },
//     icon: {
//         position: 'absolute',
//         marginTop: 16,
//         left: 10
//     },
// });