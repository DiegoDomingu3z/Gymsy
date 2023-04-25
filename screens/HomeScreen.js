import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import * as React from "react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccount, logout } from '../store/Account';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { settingLocation } from '../store/location';
import axios from 'axios';
import MainFooter from '../components/Footer/MainFooter';
import Header from '../components/Header/Header';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const [token, setToken] = useState('')
    const navigation = useNavigation()
    const request = useSelector((state) => state.account.errorCode)
    const account = useSelector((state) => state.account.account)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const API_KEY = 'AIzaSyBW0_D64IXNofGWW8SRqtmDddh24glY7Wg';
    const API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';


    // FIX THIS
    const locationPermission = async () => {
        console.log("Working")
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        } else {
            let geoLocation = await Location.getCurrentPositionAsync({});
            let toki = await AsyncStorage.getItem('@authToken')
            let loki = {
                latitude: geoLocation.coords.latitude,
                longitude: geoLocation.coords.longitude,
                token: toki
            }
            console.log(toki)
            dispatch(settingLocation(loki))
            setLocation(geoLocation.coords);
        }
    }


    const getGyms = () => {
        try {
            console.log("THIS WORKING")
            const loco = `${location.latitude}, ${location.longitude}`
            const radius = 45000
            const type = 'gym';
            const url = `${API_URL}?location=${loco}&radius=${radius}&type=${type}&key=${API_KEY}`;
            console.log(url)
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.results, 'results'); // This will log an array of nearby gyms
                })
                .catch((error) => {
                    console.log(error);
                });

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

        const firstLogin = async () => {
            try {
                let loginDate = new Date()
                const val = await AsyncStorage.getItem('@firstLogin')
                console.log(val, "VAL")
                if (val === null) {
                    await AsyncStorage.setItem("@firstLogin", loginDate.toDateString())
                    locationPermission()
                    console.log("Welcome to first login")
                }
            } catch (error) {
                console.log(error)
            }
        }



        getData()
        firstLogin()

    }, [dispatch])

    const work = async () => {
        try {
            console.log(token)
            const res = await axios.post('http://172.20.10.4:4000/api/account/location', location, {
                headers: {
                    Authorization: token
                }
            })
            console.log(res)
            console.log("working")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        // Container to give screen entire view
        <SafeAreaView className="flex-1">
            <Header />
            <View><TouchableOpacity onPress={() => getGyms()}><Text>GET GYMS</Text></TouchableOpacity></View>
            <ScrollView></ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;



