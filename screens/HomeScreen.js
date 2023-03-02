import { View, Text, SafeAreaView } from 'react-native'
import * as React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccount, logout } from '../store/Account';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const [token, setToken] = useState('')
    const navigation = useNavigation()
    const request = useSelector((state) => state.account.errorCode)
    const account = useSelector((state) => state.account.account)

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@authToken')
                if (value !== null) {
                    setToken(value)
                    dispatch(getAccount(value))
                    if (request == 'ERR_BAD_REQUEST') {
                        console.log(request)
                        AsyncStorage.removeItem('@authToken')
                        navigation.navigate("SignIn")
                    }
                }
            } catch (e) {
                console.log(e.message)
            }
        }; 
        getData()
    }, [token, account, dispatch])


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



