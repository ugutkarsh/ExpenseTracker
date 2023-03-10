import { StyleSheet, Text, View, TextInput } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const Input = ({ label, textInputConfig, invalid }) => {

    let inputStyles =[styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }

    if(invalid){
        inputStyles.push(styles.invalidInput);
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline:{
        minHeight: 100,
        textAlignVertical: "top",

    },
    invalidLabel:{
        color: GlobalStyles.colors.error500,
    },
    invalidInput:{
        backgroundColor: GlobalStyles.colors.error50
    }
});