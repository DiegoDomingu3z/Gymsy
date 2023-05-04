import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import * as React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import { Provider } from 'react-redux';
import { store } from './store'
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import AppLightTheme from './themes/appLightTheme';
import AppDarkTheme from './themes/appDarkTheme';
import SignUp from './screens/AccountCreation/SignUp';
import AccountInfo from './screens/AccountCreation/AccountInfo';
import FriendsScreen from './screens/FriendsScreen';
import ChatScreen from './screens/ChatScreen';
import Tabs from './tab-navigation/navigation';
import GymsScreen from './screens/GymsScreen';
// Creates each stack
const Stack = createNativeStackNavigator();


export default function App() {
  const colorScheme = useColorScheme()
  return (
    // init navigation's, add all screens here
    <Provider store={store}>
      <NavigationContainer theme={colorScheme == 'light' ? AppLightTheme : AppDarkTheme}>

        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal' }} />
          <Stack.Screen name="AccountInfo" component={AccountInfo} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Gyms' component={GymsScreen} options={{ headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal' }} />
          <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false, animationEnabled: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}




