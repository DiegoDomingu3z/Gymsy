import { View, Text, SafeAreaView } from 'react-native'
import * as React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccount, logout } from '../store/Account';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const [token, setToken] = useState('')
    const navigation = useNavigation()
    const request = useSelector((state) => state.account.errorCode)
    const account = useSelector((state) => state.account.account)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const locationPermission = async () => {
        try {
                console.log("Working")
                let { status } = await Location.requestForegroundPermissionsAsync();
                    if (status !== 'granted') {
                      setErrorMsg('Permission to access location was denied');
                    } else {
                         let location = await Location.getCurrentPositionAsync({});
                         setLocation(location);        
            }
        } catch (error) {
            console.log(error)
        }
    }

    const firstLogin = async () => {
        try {
            let loginDate = new Date()
            const val = await AsyncStorage.getItem('@firstLogin')
            console.log(val, "VAL")
            if (val === null) {
                locationPermission()
                console.log("Welcome to first login")
                await AsyncStorage.setItem("@firstLogin", loginDate.toDateString())
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@authToken')
                if (value !== null) {
                    setToken(value)
                    dispatch(getAccount(value))
                    if (request == 'ERR_BAD_REQUEST') {
                        AsyncStorage.removeItem('@authToken')
                        navigation.navigate("SignIn")
                    }
                }
            } catch (e) {
                console.log(e.message)
            }
        }; 
        getData()
        firstLogin()
    }, [dispatch])


    return (
        // Container to give screen entire view
        <SafeAreaView>
            <Text className='text-red-500'>{account.firstName}</Text>
            <View>
                {token ?
                    <View>
                        <Text>Token Detected {token}</Text>
                    </View>

                    :
                    <View>
                        <Text>{token}</Text>

                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;



