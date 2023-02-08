import {
    View, Text, TextInput, TouchableOpacity, ImageBackground, Button, KeyboardAvoidingView, Platform,
    StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import React from 'react'
import { Vibration, Alert } from 'react-native'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { logInAccount } from '../store/Account'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoggingIn = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const alertUser = () => {
        Alert.alert('Incorrect Password', 'The password or email you entered is incorrect', [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }
    const work = async (data) => {
        try {
            // @ts-ignore
            const request = await dispatch(logInAccount(data))
            switch (request.payload) {
                case "Request failed with status code 400":
                    alertUser()
                    break;
                case "Request failed with status code 401":
                    alertUser()
                    break;
                case "Request failed with status code 403":
                    alertUser()
                    break;
                default:
                    AsyncStorage.setItem('@authToken', request.payload)
                    // @ts-ignore
                    navigation.navigate("Home")
                    break;
            }
            console.log(request.payload)
        } catch (error) {
            console.log(error)
        }


    }
    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 justify-center'>
                    <KeyboardAvoidingView behavior="padding" >
                        <View className='mt-20'>
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
                                    <View className='mt-20'>
                                        <TextInput keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Email"
                                            className='bg-[#35353591] rounded p-4 mx-4 text-white' returnKeyType="next"
                                            onChangeText={handleChange('email')}
                                            value={values.email} />
                                        <TextInput keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Password"
                                            value={values.password} onChangeText={handleChange('password')}
                                            className='bg-[#35353591]  rounded p-4 mx-4 mt-5 mb-7 text-white' secureTextEntry={true} returnKeyType="go" />
                                        <TouchableOpacity onPress={() => handleSubmit()} className="text-center bg-red-500 mx-4 p-3 rounded">
                                            <Text className='text-center'>Log In</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>

    )

}

export default LoggingIn