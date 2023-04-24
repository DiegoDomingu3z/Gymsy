import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import EmailInfo from '../../components/Account/EmailInfo'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
    const navigation = useNavigation()
    const img = { uri: 'https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80' }
    return (
        <SafeAreaView className='flex-1'>
            <View>
                <EmailInfo />
            </View>
        </SafeAreaView>

    )
}

export default SignUp