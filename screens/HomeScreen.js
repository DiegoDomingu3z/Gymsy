import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import * as React from "react"
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccount } from '../store/Account';


const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [token, setToken] = useState('')

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@authToken')
                if (value !== null) {
                    setToken(value)
                    console.log(value, 'this the token')
                }
                return value
            } catch (e) {
            }
        }
        getData()
        dispatch(getAccount())
    }, [])


    return (
        // Container to give screen entire view
        <SafeAreaView>
            <Text className='text-red-500'>THis is working</Text>
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



