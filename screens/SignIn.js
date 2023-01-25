import {
    View, Text, TextInput, TouchableOpacity, ImageBackground, Button, KeyboardAvoidingView, Platform,
    StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import React from 'react'
import { Vibration } from 'react-native'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { logInAccount } from '../store/Account'
import { api } from '../services/ApiService'
const SignIn = () => {
    const img = { uri: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }
    const dispatch = useDispatch()
    const work = async (data) => {
        try {
            const res = await api.post('account/login', data)
                .then(res => res.data)
            console.log("is this working")
            console.log(res)
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <ImageBackground source={img} resizeMode={'cover'} className="h-screen">
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
        </ImageBackground>

    )

}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
// })



export default SignIn