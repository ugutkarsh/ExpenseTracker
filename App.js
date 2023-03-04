import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import AllExpenses from './src/screens/AllExpenses';
import ManageExpenses from './src/screens/ManageExpenses';
import RecentExpenses from './src/screens/RecentExpenses';
import { GlobalStyles } from './src/constants/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from './src/components/UI/IconButton';
import ExpensesContextProvider from './src/store/expenses-context';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ }) => (
          <IconButton icon="plus" size={24} color={"#fff"} onPress={() => {navigation.navigate('ManageExpenses') }} />
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
    </BottomTabs.Navigator>
  )
}

const App = () => {
  return (
    <ExpensesContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor:GlobalStyles.colors.primary500},
        headerTintColor: "#fff"
      }}>
        <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{ headerShown: false }} />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpensesContextProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
