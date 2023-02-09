import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, StyleSheet, Keyboard, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useTheme } from '@react-navigation/native';

const EmailInfo = () => {
    const { colors } = useTheme();
  return (
            <KeyboardAvoidingView behavior='padding' className="" >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="">
                <View className="mt-40">
                    <View className="mt-20">
                        <TextInput  keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Email"
                            className='bg-[#35353591] rounded text-white mx-4 p-4 py-5 border-slate-600 border-2' returnKeyType="next" />
                            <Text className="text-center mt-4 text-white">Create a password with at least 6 characters</Text>
                        <TextInput keyboardAppearance="dark" placeholderTextColor="gray" placeholder="Password" secureTextEntry={true}
                        className='bg-[#35353591] rounded text-white mx-4 p-4 py-5 mt-1 border-slate-600 border-2' returnKeyType="go" minLength={6}/>
                        <TouchableOpacity className="p-3 py-4 mx-4 rounded mt-4" style={{backgroundColor: colors.btn1}}>
                            <Text className="text-center b">Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
  )
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