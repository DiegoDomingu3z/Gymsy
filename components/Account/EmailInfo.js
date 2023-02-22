import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, StyleSheet, Keyboard, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import { useEffect } from 'react';
import BirthdayInfo from './BirthdayInfo';

const EmailInfo = () => {
    const { colors } = useTheme();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [RegistrationPage, setRegistrationPage] = useState(false)
    const [personalPage, setPersonalPage] = useState(false)
    const [ageComponent, setAgeComponent] = useState(false)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const firstInput = useRef('');
    const secondInput = useRef('');
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

    useEffect(() => {
        console.log(firstName)
        console.log(lastName)
        console.log(ageComponent)
    }, [firstName, lastName, ageComponent])

    if (RegistrationPage == false) {
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
                                <TouchableOpacity onPress={() => nextPage()} className="p-3 py-4 mx-4 rounded mt-4" style={{ backgroundColor: colors.btn1 }}>
                                    <Text className="text-center b">Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    } else if (personalPage == true) {
        return (
            <PersonalInfo firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} setAgeComponent={setAgeComponent} setPersonalPage={setPersonalPage} />
        )
    }
    if (ageComponent == true) {
        return (
            <BirthdayInfo userEmail={email} userPassword={password} userFirstName={firstName} userLastName={lastName} />
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