import { View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { Text } from "react-native";

const Editprofile =()=>{
    return(
        <View style={{backgroundColor: GlobalStyles.colors.primary700,flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: '#fff'}}>Edit profile page</Text>
        </View>
    )
};

export default Editprofile;