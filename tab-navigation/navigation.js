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
            activeColor={'#FFFFFF'}
            inactiveColor="#3e2465"
            barStyle={{
                elevation: 0,
                backgroundColor: '#00000060',
                height: 80,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    let color;
                    if (route.name == "Home") {
                        iconName = focused ? "ios-home" : "ios-home-outline"
                        color = focused ? '#000000' : '#FFFFFF'
                    } else if (route.name === "FriendsScreen") {
                        iconName = focused ? "ios-people-circle" : "ios-people-circle-outline"
                        color = focused ? '#000000' : '#FFFFFF'
                    } else if (route.name === "ChatScreen") {
                        iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles-outline"
                        color = focused ? '#000000' : '#FFFFFF'
                    }
                    return <Ionicons name={iconName} size={25} color={color} />
                },
            })} tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'black',
                showLabel: false,
            }}>
            <Tab.Screen name="FriendsScreen" component={FriendsScreen} options={{
                tabBarLabel: null, // add this option
                headerShown: false,
                animationEnabled: true
            }}
            />
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: null, // add this option
                headerShown: false,
                animationEnabled: true
            }} />
            <Tab.Screen name="ChatScreen" component={ChatScreen}
                options={{
                    tabBarLabel: null, // add this option
                    headerShown: false,
                    animationEnabled: true
                }} />
        </Tab.Navigator>
    )
}


export default Tabs