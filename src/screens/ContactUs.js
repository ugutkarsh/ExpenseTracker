import { ScrollView, View, Text, Linking } from "react-native";
import { GlobalStyles } from "../constants/styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Contact = () => {
    return (
        <>
            <ScrollView style={{ backgroundColor: GlobalStyles.colors.primary700, flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 22 }}>Welcome to our expense tracker app!</Text>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>We are a team of passionate developers who believe that managing your finances should be simple and hassle-free.</Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 7 }}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>
                            Our journey began when we realized how difficult it can be to keep track of expenses and stick to a budget.
                            We found ourselves manually recording our expenses on spreadsheets, which was time-consuming and often inaccurate.
                            That's when we decided to create an app that would make tracking expenses easy and convenient.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 7 }}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>
                            Our mission is to empower individuals to take control of their finances by providing them with a tool that simplifies expense tracking.
                            Our app is designed to be user-friendly,
                            with a clean and intuitive interface that makes it easy to record expenses and categorize them.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 7 }}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>
                            We understand the importance of security when it comes to finances,
                            which is why our app is built with the highest level of encryption to ensure that your data remains safe and secure.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 7 }}>
                        <Text style={{ color: '#fff', fontSize: 15 }}>
                            We are constantly working to improve our app and add new features to make managing your finances even easier.
                            We welcome feedback from our users and strive to provide the best possible experience for our users.
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 7 }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>
                            Thank you for choosing our expense tracker app to help you on your financial journey.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: GlobalStyles.colors.primary700, paddingBottom: 50, paddingHorizontal: 5 }}>
                <MaterialCommunityIcons color="#fff" name="email" size={50} onPress={() => (Linking.openURL('mailto:utkarshgawande01@gmail.com'))} />
                <MaterialCommunityIcons color="#fff" name="whatsapp" size={50} onPress={() => (Linking.openURL('whatsapp://send?phone=9427790098'))} />
                <MaterialCommunityIcons color="#fff" name="phone" size={50} onPress={() => (Linking.openURL('tel:7990424078'))} />
                <MaterialIcons color="#fff" name="sms" size={50} onPress={() => (Linking.openURL('sms:7990424078'))} />
            </View>
        </>
    )
};

export default Contact;