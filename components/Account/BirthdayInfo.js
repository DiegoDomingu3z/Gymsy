import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Button } from 'react-native'
import React, {useRef} from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Vibration, Alert } from 'react-native'
import PersonalInfo from './PersonalInfo';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../store/Account'

const BirthdayInfo = ({userEmail, userPassword, userFirstName, userLastName}) => {
    const { colors } = useTheme();
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('')
    const [showPicker, setShowPicker] = useState(false);
    const [userAge, setUserAge] = useState(true)
    const dispatch = useDispatch()
    const alertUser = () => {
        Alert.alert('Invalid Age', 'You must be 18 years or older', [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }
    const Register = () => {
        var userDate = new Date(selectedDate);
        console.log(userDate)
        let ofAge = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate())
        if (ofAge < userDate.getTime()) {
            console.log("Invalid") 
            setUserAge(true)
            alertUser()
            Vibration.vibrate(200)
        } else {
            console.log("valid")
            dispatch(createAccount(
                {
                    email: userEmail,
                    password: userPassword,
                    firstName: userFirstName,
                    lastNmae: userLastName,
                    age: 20
                }
            ))
            setUserAge(false)
            
            
        }
    }
const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toDateString()
    const formattedDate = currentDate.slice(4, 10) + "," + currentDate.slice(10)
    setSelectedDate(formattedDate);
 
  };


  return (
   <View>
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
        <TouchableOpacity  onPress={() => Register()} className="py-4 mx-6 rounded mt-4" style={{backgroundColor: colors.btn2}}>
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