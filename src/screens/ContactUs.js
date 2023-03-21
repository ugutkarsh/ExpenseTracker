import { View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Text } from "react-native";

const Contact =()=>{
    return(
        <View style={{backgroundColor: GlobalStyles.colors.primary700,flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: '#fff'}}>About Us page</Text>
        </View>
    )
};

export default Contact;