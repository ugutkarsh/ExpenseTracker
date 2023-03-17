import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from './src/components/UI/IconButton';
import { GlobalStyles } from './src/constants/styles';
import AllExpenses from './src/screens/AllExpenses';
import ManageExpenses from './src/screens/ManageExpenses';
import RecentExpenses from './src/screens/RecentExpenses';
import SplashScreen from './src/screens/SplashScreen';
import ExpensesContextProvider from './src/store/expenses-context';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Account from './src/screens/Account';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Hide = () => {
  hideNavigationBar();
};


const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ }) => (
          <IconButton icon="plus" size={24} color={"#fff"} onPress={() => { navigation.navigate('ManageExpenses') }} />
        )
      })}
    >
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="clock-check-outline" size={30} color={color} />
        }} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="calendar" size={30} color={color} />
      }} />
      <BottomTabs.Screen name="Account" component={Account} options={{
        title: 'Account',
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" size={30} color={color} 

        />
      }} />
    </BottomTabs.Navigator>
  )
}

const App = () => {
  return (
    <>
      <Hide />
      <StatusBar hidden />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "#fff"
          }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Expenses Overview" component={ExpensesOverview} options={{ headerShown: false }} />
            <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

export default App;
