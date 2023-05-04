import { View, Text } from 'react-native'
import React from 'react'
import { settingLocation } from '../store/location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import ShowGyms from '../components/Gyms/ShowGyms';
import { SafeAreaView } from 'react-native-safe-area-context';
const GymsScreen = () => {
    const dispatch = useDispatch()
    const [allowedLocation, setAllowedLocation] = useState(null);
    const [token, setToken] = useState('')
    const request = useSelector((state) => state.account.errorCode)

    const locationPermission = async () => {
        console.log("Working")
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setAllowedLocation(false);
        } else {
            let geoLocation = await Location.getCurrentPositionAsync({});
            let toki = await AsyncStorage.getItem('@authToken')
            let loki = {
                latitude: geoLocation.coords.latitude,
                longitude: geoLocation.coords.longitude,
                token: toki
            }
            dispatch(settingLocation(loki))
        }
    }


    useEffect(() => {
        const firstLogin = async () => {
            try {
                let loginDate = new Date()
                const val = await AsyncStorage.getItem('@firstLogin')
                console.log(val)
                console.log(val, "VAL")
                if (val === null) {
                    await AsyncStorage.setItem("@firstLogin", loginDate.toDateString())
                    locationPermission()
                }
            } catch (error) {
                console.log(error)
            }
        }




        firstLogin()

    }, [dispatch])

    return (
        <SafeAreaView>

            <View>

                <ShowGyms />
            </View>
        </SafeAreaView>
    )
}

export default GymsScreen