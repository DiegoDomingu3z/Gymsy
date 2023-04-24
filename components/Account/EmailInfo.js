import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Vibration, Alert, } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import PersonalInfo from './PersonalInfo';
import BirthdayInfo from './BirthdayInfo';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../store/Account';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logInAccount } from '../../store/Account'
const EmailInfo = () => {
    const { colors } = useTheme();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [RegistrationPage, setRegistrationPage] = useState(false)
    const [personalPage, setPersonalPage] = useState(true)
    const [ageComponent, setAgeComponent] = useState(false)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const firstInput = useRef('');
    const secondInput = useRef('');
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const next = (nextInput) => {
        nextInput.current.focus();
    }

    const nextPage = () => {
        if (password != null && email != null) {
            setRegistrationPage(true)
            setPersonalPage(true)
            console.log(personalPage)
        }

    }

    const goBack = () => {
        setRegistrationPage(false)
        setAgeComponent(true)
    }

    const alertUser = (title, message) => {
        Alert.alert(title, message, [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }


    const registerUser = async () => {
        try {
            dispatch(createAccount(
                {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    age: userAge
                }
            )).then(async (result) => {
                console.log(result.meta.requestStatus)
                if (result.meta.requestStatus == "rejected") {
                    console.log(result)
                    Vibration.vibrate(200)
                    alertUser('Account Already Exists', 'This Email is associated with an account already')
                } else if (result.meta.requestStatus == "fulfilled") {
                    console.log("succes", result)
                    try {
                        dispatch(logInAccount({
                            email: email,
                            password: password
                        }
                        )).then((res => {
                            console.log(res)
                            AsyncStorage.setItem('@authToken', res.payload.accessToken)
                            AsyncStorage.setItem('@refreshToken', res.payload.accessToken)
                        }))
                        navigation.navigate("Home")
                    } catch (error) {
                        console.log(error)
                    }

                }
            })
        } catch (error) {
            console.log(error)
        }

    }

    if (personalPage == true) {
        return (
            <PersonalInfo firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} setAgeComponent={setAgeComponent} setPersonalPage={setPersonalPage} />
        )
    } else if (ageComponent == true) {
        return (

            <BirthdayInfo setUserAge={setUserAge} setAgeComponent={setAgeComponent} setRegistrationPage={setRegistrationPage} setPersonalPage={setPersonalPage} />
        )
    }
    if (RegistrationPage == true) {
        return (
            <KeyboardAvoidingView behavior='padding' className="" >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex relative">

                        <TouchableOpacity onPress={() => goBack()} className='absolute top-2 left-5 bg-gray-100 p-1 rounded-full'>
                            <Ionicons name="md-chevron-back" size={28} color="black" />
                        </TouchableOpacity>

                        <View className="mt-40 mx-12">
                            <View className="mt-20">
                                <TextInput onChangeText={setEmail} onSubmitEditing={() => next(secondInput)} ref={firstInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Email"
                                    className='bg-[#35353591] rounded-2xl p-4 py-5 text-white border-slate-600 border-2' returnKeyType="next" />

                                <TextInput onChangeText={setPassword} ref={secondInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Password" secureTextEntry={true}
                                    className='bg-[#35353591]  rounded-2xl p-4  py-5 mt-5  text-white border-slate-600 border-2' returnKeyType="go" minLength={6} />
                                <Text className="text-center mt-4 text-white text-xs mb-7">Create a password with at least 6 characters</Text>
                                <TouchableOpacity onPress={() => registerUser()} className="text-center  py-5 rounded-2xl" style={{ backgroundColor: colors.btn1 }}>
                                    <Text className="text-center b">Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }

}

export default EmailInfo