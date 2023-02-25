import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {  useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Vibration, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';


const BirthdayInfo = ({setUserAge,  setAgeComponent, setRegistrationPage, setPersonalPage }) => {
    const { colors } = useTheme();
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('')
    const [displayDate, setDisplayDate] = useState('')
    const dispatch = useDispatch()
    const alertUser = (title, message) => {
        Alert.alert(title, message, [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }
    const Register = () => {
        var userDate = new Date(selectedDate);
        let ofAge = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate())
        if (ofAge < userDate.getTime()) {
            console.log("Invalid")
            alertUser('Invalid Age','You must be 18 years or older')
            Vibration.vibrate(200)
        }else if(isNaN(userDate)){
            alertUser('No Date Selected','Please select your birthday')
            Vibration.vibrate(200)
        } else {
            console.log(userDate)
            setDisplayDate(selectedDate)
            setAgeComponent(false)
            setRegistrationPage(true)
            setUserAge(20)
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
        setSelectedDate(formattedDate);

    };
    return (
        <View>
        <View className="ml-5" >
            <TouchableOpacity onPress={() => goBack()}>
      <Ionicons name="md-arrow-back" size={32} color="white" />
            </TouchableOpacity>
        </View>
            <View>
                <Text className="text-white text-5xl text-center mt-20">
                    Tell us Your Birthday!
                </Text>
            </View>
            <View className="border-b-4 border-indigo-500 mt-36 mx-5">
                <Text className="text-white text-center text-lg">{selectedDate}</Text>
            </View>




            <View className="mt-20">
                <View className="mb-16">
                    <TouchableOpacity onPress={() => Register()} className="py-4 mx-6 rounded mt-4" style={{ backgroundColor: colors.btn2 }}>
                        <Text className="text-center text-white">Continue</Text>
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


    )
}

export default BirthdayInfo