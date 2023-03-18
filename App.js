import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import IconButton from './src/components/UI/IconButton';
import ExpensesContextProvider from './src/store/expenses-context';
import { GlobalStyles } from './src/constants/styles';

import AllExpenses from './src/screens/AllExpenses';
import ManageExpenses from './src/screens/ManageExpenses';
import RecentExpenses from './src/screens/RecentExpenses';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Account from './src/screens/Account';
import Statistics from './src/screens/Statistics';
import Expenses from './src/screens/Expenses';
import Report from './src/screens/Report';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Hide = () => {
  hideNavigationBar();
};


const ExpensesOverview = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,

      })}
    >
      <BottomTabs.Screen name="Statistics" component={Statistics} options={{
        title: 'Statistics',
        tabBarLabel: 'Statistics',
        tabBarIcon: ({ color, size }) => <Entypo name="circular-graph" size={30} color={color} />
      }} />

      <BottomTabs.Screen name="Expenses" component={Expenses} options={{
        title: 'Expenses',
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cash-multiple" size={30} color={color}
        />
      }} />

      <BottomTabs.Screen name="ManageExpenses" component={ManageExpenses} options={{
        title: 'Add Expenses',
        tabBarLabel: 'Add Expenses',
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" size={35} color={color}
        />
      }} />

      <BottomTabs.Screen name="Report" component={Report} options={{
        title: 'Report',
        tabBarLabel: 'Report',
        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="file-document" size={30} color={color}
        />
      }} />

      <BottomTabs.Screen name="Account" component={Account} options={{
        title: 'Account',
        tabBarLabel: 'Account',
        headerRight: ({ }) => (
          <IconButton icon="logout" size={24} color={"#fff"} onPress={() => { navigation.replace('Login') }} />
        ),
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
            headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
            headerTintColor: "#fff",
            headerShown: false,
          }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Expenses Overview" component={ExpensesOverview} options={{ headerShown: false }} />
            <Stack.Screen name="All Expenses" component={AllExpenses} options={{ headerShown: true }} />
            <Stack.Screen name="Recent Expenses" component={RecentExpenses} options={{ headerShown: true }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

export default App;
