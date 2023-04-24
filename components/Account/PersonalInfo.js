import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Keyboard, TouchableOpacity, Vibration, Alert, } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const PersonalInfo = ({ firstName, lastName, setFirstName, setLastName, setAgeComponent, setPersonalPage }) => {
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
                <View className="flex relative">
                    <View className="">
                        <TouchableOpacity onPress={() => goBack()} className='absolute top-2 left-5 bg-gray-100 p-1 rounded-full'>
                            <Ionicons name="md-chevron-back" size={28} color="black" />
                        </TouchableOpacity>
                        <View className='mt-40 mx-12'>
                            <TextInput onSubmitEditing={() => next(secondInput)} ref={firstInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="First Name" value={firstName}
                                onChangeText={setFirstName} className='bg-[#35353591] rounded-2xl p-4 py-5 text-white border-slate-600 border-2' returnKeyType="next" />
                            <TextInput ref={secondInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Last Name" value={lastName}
                                onChangeText={setLastName} className='bg-[#35353591]  rounded-2xl p-4  py-5 mt-5 mb-7 text-white border-slate-600 border-2 ' returnKeyType="go" minLength={6} />
                            <TouchableOpacity onPress={() => nextPage()} className="text-center  py-5 rounded-2xl" style={{ backgroundColor: colors.btn2 }}>
                                <Text className="text-center">Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default PersonalInfo