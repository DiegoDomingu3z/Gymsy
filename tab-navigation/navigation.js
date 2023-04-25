import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const Tab = createMaterialBottomTabNavigator();
import ChatScreen from '../screens/ChatScreen';
import FriendsScreen from '../screens/FriendsScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tabs = () => {
    return (
        <Tab.Navigator
            activeColor="#000000"
            inactiveColor="#3e2465"
            barStyle={{
                elevation: 0,
                backgroundColor: '#00000060',
                height: 80,
            }} >
            <Tab.Screen name="FriendsScreen" component={FriendsScreen} options={{ headerShown: false, animationEnabled: false }}
            />
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="people-outline" color={'#000000'} size={20} />
                ),
                tabBarLabel: null, // add this option
                headerShown: false,
                animationEnabled: false
            }} />
            <Tab.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false, animationEnabled: false }} />
        </Tab.Navigator>
    )
}


export default Tabs