import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Button } from 'react-native'
import React, {useRef} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import { useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthdayInfo = () => {
    const { colors } = useTheme();
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    
  
    const [date, setDate] = useState(new Date(1598051730000));
    const [selectedDate, setSelectedDate] = useState('')
    const [showPicker, setShowPicker] = useState(false);
  
const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toDateString()
    console.log(currentDate)
    const formattedDate = currentDate.slice(4, 10) + "," + currentDate.slice(10)
    console.log(formattedDate)
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
        <TouchableOpacity className="py-4 mx-6 rounded mt-4" style={{backgroundColor: colors.btn2}}>
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