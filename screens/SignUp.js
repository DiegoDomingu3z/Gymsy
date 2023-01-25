import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const navigation = useNavigation()
    const img = { uri: 'https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80' }
    return (
        <View className='flex-1'>
            <ImageBackground source={img} resizeMode="cover" className='h-screen' >
                <View className='flex flex-row items-center h-screen mt-80 space-x-3 justify-center'>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")} className='rounded-lg bg-red-600 mt-20 '>
                        <Text className='p-4 px-14 text-lg font-bold text-white'>Login In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-black mt-20 rounded-lg'>
                        <Text className=' text-white p-4 text-lg px-14 font-bold '>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignUp