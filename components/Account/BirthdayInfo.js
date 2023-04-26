import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Vibration, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BirthdayInfo = ({ setUserAge, setAgeComponent, setRegistrationPage, setPersonalPage }) => {
    const { colors } = useTheme();
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('')
    const [displayDate, setDisplayDate] = useState('')
    const [isAllowed, setAllowed] = useState(false)
    const dispatch = useDispatch()
    const alertUser = (title, message) => {
        Alert.alert(title, message, [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }
    const Register = async () => {
        var userDate = new Date(selectedDate);
        let ofAge = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate())
        if (ofAge < userDate.getTime()) {
            console.log("Invalid")
            alertUser('Invalid Age', 'You must be 18 years or older')
            Vibration.vibrate(200)
        } else if (isNaN(userDate)) {
            alertUser('No Date Selected', 'Please select your birthday')
            Vibration.vibrate(200)
        } else {
            await AsyncStorage.removeItem('@firstLogin')
            console.log(userDate)
            setDisplayDate(selectedDate)
            setAgeComponent(false)
            setRegistrationPage(true)
            let birthYear = userDate.getFullYear()
            console.log(birthYear)
            let age = (new Date().getFullYear() - birthYear)
            console.log(age)
            setUserAge(age)
            console.log(displayDate, 'display date')
        }
    }
    const goBack = () => {
        setAgeComponent(false)
        setPersonalPage(true)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate.toDateString()
        const formattedDate = currentDate.slice(4, 10) + "," + currentDate.slice(10)
        const ageToSend = formattedDate.slice(8)
        setSelectedDate(formattedDate);
        var userDate = new Date(selectedDate);
        let ofAge = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate() + 1)
        var userDate = new Date(selectedDate);
        if (ofAge < userDate.getTime()) {
            setAllowed(true)
        } else {
            setAllowed(false)
        }

    };
    return (
        <View className='relative'>
            <View className='flex'>

                <TouchableOpacity onPress={() => goBack()} className='absolute top-2 left-5 bg-gray-100 p-1 rounded-full'>
                    <Ionicons name="md-chevron-back" size={28} color="black" />
                </TouchableOpacity>

                <View className='mt-10'>
                    <Text className="text-white text-5xl text-center mt-20">
                        Tell us Your Birthday!
                    </Text>
                </View>
                <View className="border-b-4 border-indigo-500 mt-20 mx-5">
                    <Text className="text-white text-center text-lg">{selectedDate}</Text>
                </View>




                <View className="mt-14">
                    <View className="mb-16">
                        <TouchableOpacity onPress={() => Register()} className="py-4 mx-6 rounded-2xl mt-4" style={{
                            backgroundColor: (selectedDate) ? colors.btn1 : colors.btn2,
                        }}>
                            <Text className="text-center" style={{
                                color: (isAllowed == true) ? '#FF0000' : '#000000'
                            }}>Continue</Text>
                        </TouchableOpacity>

                    </View>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="spinner"
                        onChange={onChange}
                    />
                </View>
            </View>
        </View>


    )
}

export default BirthdayInfo