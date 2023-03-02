import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Keyboard, TouchableOpacity, Vibration, Alert, } from 'react-native'
import React, {useRef} from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const PersonalInfo = ({firstName, lastName, setFirstName, setLastName, setAgeComponent, setPersonalPage}) => {
    const { colors } = useTheme();
    const firstInput = useRef(null);
    const secondInput = useRef(null);
    const navigation = useNavigation()

    const alertUser = (title, message) => {
        Alert.alert(title, message, [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }
    
    const nextPage = () => {
       if (firstName != null && lastName != null) {
        setPersonalPage(false)
        setAgeComponent(true)
       } else {
        alertUser("Incorrect Information", "Please enter all your information")
        Vibration.vibrate(200)
       }
    }
    const next = (nextInput) => {
        nextInput.current.focus();
    }

    const goBack = () => {
        navigation.navigate('Welcome')
    }



  return (
    <KeyboardAvoidingView behavior='padding' className="" >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="">
        <View className="ml-5">
                         <TouchableOpacity onPress={() => goBack()}>
                              <Ionicons name="md-arrow-back" size={32} color="white" />
                         </TouchableOpacity>
                      </View>
                <View className="mt-40">
                    <View className="mt-20">
                        <TextInput onSubmitEditing={() => next(secondInput)} ref={firstInput}  keyboardAppearance="dark" placeholderTextColor="gray" placeholder="First Name" value={firstName}
                          onChangeText={setFirstName}  className='bg-[#35353591] rounded text-white mx-4 p-4 py-5 border-slate-600 border-2' returnKeyType="next" />
                        <TextInput ref={secondInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Last Name" value={lastName}
                       onChangeText={setLastName} className='bg-[#35353591] rounded text-white mx-4 p-4 py-5 mt-5 border-slate-600 border-2' returnKeyType="go" minLength={6}/>
                        <TouchableOpacity onPress={() => nextPage()} className="p-3 py-4 mx-4 rounded mt-4" style={{backgroundColor: colors.btn2}}>
                            <Text className="text-center b">Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
  )
}

export default PersonalInfo