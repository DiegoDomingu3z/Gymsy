import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, StyleSheet, Keyboard, TouchableOpacity, Vibration, Alert,} from 'react-native'
import React, { useRef, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import PersonalInfo from './PersonalInfo';
import BirthdayInfo from './BirthdayInfo';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../store/Account';

const EmailInfo = () => {
    const { colors } = useTheme();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [RegistrationPage, setRegistrationPage] = useState(false)
    const [personalPage, setPersonalPage] = useState(true)
    const [ageComponent, setAgeComponent] = useState(false)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [userAge, setUserAge ] = useState(null)
    const firstInput = useRef('');
    const secondInput = useRef('');
    const dispatch = useDispatch()
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

    const alertUser = (title, message) => {
        Alert.alert(title, message, [
            {
                text: 'Ok',
                style: 'cancel',
            },
        ])
    }

    const registerUser = () => {
        dispatch(createAccount(
            {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                age: 20
            }
            )).then((result) => {
                console.log(result.meta.requestStatus)
                if (result.meta.requestStatus == "rejected") {
                    console.log(result)
                    Vibration.vibrate(200)
                    alertUser('Account Already Exists','This Email is associated with an account already')
                } else if (result.meta.requestStatus == "fulfilled") {
                    console.log( "Success")
                }
            })
        }

    if (personalPage == true) {
        return (
            <PersonalInfo firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} setAgeComponent={setAgeComponent} setPersonalPage={setPersonalPage} />
        )
    } else if (ageComponent == true) {
        return (
           
            <BirthdayInfo setUserAge={setUserAge}  setAgeComponent={setAgeComponent} setRegistrationPage={setRegistrationPage} />
        )
    }
    if (RegistrationPage == true) {
        return (
            <KeyboardAvoidingView behavior='padding' className="" >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="">
                    <View className="mt-40">
                        <View className="mt-20">
                            <TextInput onChangeText={setEmail} onSubmitEditing={() => next(secondInput)} ref={firstInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Email"
                                className='bg-[#35353591] rounded text-white mx-4 p-4 py-5 border-slate-600 border-2' returnKeyType="next" />
                            <Text className="text-center mt-4 text-white">Create a password with at least 6 characters</Text>
                            <TextInput onChangeText={setPassword} ref={secondInput} keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Password" secureTextEntry={true}
                                className='bg-[#35353591] rounded text-white mx-4 p-4 py-5 mt-1 border-slate-600 border-2' returnKeyType="go" minLength={6} />
                            <TouchableOpacity onPress={() => registerUser()} className="p-3 py-4 mx-4 rounded mt-4" style={{ backgroundColor: colors.btn1 }}>
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

// const styles = StyleSheet.create({
//     back:{
//       backgroundColor: Colors.card
//     },
//     light: {
//       backgroundColor: '#242c40'
//     }
//   })

export default EmailInfo