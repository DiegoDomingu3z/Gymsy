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
import LoggingIn from '../components/LoggingIn'

const Login = () => {
    return (
        <View className="bg-[#FED766] dark:bg-slate-800  flex-1">
            <LoggingIn/>
        </View>
    )

}

export default Login