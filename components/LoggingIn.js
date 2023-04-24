import {
    View, Text, TextInput, TouchableOpacity, ImageBackground, Button, KeyboardAvoidingView, Platform,
    StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import React, { useRef } from 'react'
import { Vibration, Alert } from 'react-native'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { logInAccount } from '../store/Account'
import { useNavigation, useTheme } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoggingIn = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { colors } = useTheme()
    const alertUser = () => {
        Alert.alert('Incorrect Password', 'The password or email you entered is incorrect', [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }
    const firstInput = useRef(null);
    const secondInput = useRef(null);
    const next = (nextInput) => {
        nextInput.current.focus();
    }

    const work = async (data) => {
        try {
            // @ts-ignore
            const request = await dispatch(logInAccount(data))
            console.log(request.type, 'this the status')
            if (request.type == "account/login/rejected") {
                alertUser()
            } else {
                AsyncStorage.setItem('@authToken', request.payload)
                // @ts-ignore
                navigation.navigate("Home")
            }
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className='flex-1 justify-center relative items-center'>
                <KeyboardAvoidingView behavior="padding" >
                    <View className='flex-1'>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={async (values) => {
                                // dispatch(logInAccount(values))
                                work(values)
                                console.log(values)
                                Vibration.vibrate(100)
                            }}
                        >
                            {({ handleChange, handleSubmit, values }) => (
                                <View className='mt-40'>
                                    <TextInput onSubmitEditing={() => next(secondInput)} ref={firstInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Email"
                                        className='bg-[#35353591] rounded-2xl p-4 py-5 text-white border-slate-600 border-2' returnKeyType="next"
                                        onChangeText={handleChange('email')}
                                        value={values.email} />
                                    <TextInput ref={secondInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Password"
                                        value={values.password} onChangeText={handleChange('password')}
                                        className='bg-[#35353591]  rounded-2xl p-4  py-5 mt-5 mb-7 text-white border-slate-600 border-2 ' secureTextEntry={true} returnKeyType="go" onSubmitEditing={handleSubmit} />
                                    <TouchableOpacity onPress={() => handleSubmit()} className="text-center px-32 py-5 rounded-2xl" style={{ backgroundColor: colors.btn1 }}>
                                        <Text className='text-center'>Log In</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </View>
                </KeyboardAvoidingView>
                <View className='absolute bottom-6'>
                    <TouchableOpacity>
                        <Text className='text-white text-center'>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )

}

export default LoggingIn