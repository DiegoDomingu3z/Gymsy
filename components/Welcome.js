import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Welcome = () => {
    const navigation = useNavigation()
    const { colors } = useTheme();
    const removeToken = async () => {
        navigation.navigate('SignUp')
        AsyncStorage.removeItem('@firstLogin')
    }
    return (

        <View className='relative flex-1 justify-center items-center'>
            <View>
                <Image source={require('../assets/logos/logo.png')} className='object-scale-down h-100 w-50 max-w-none mb-40' />
            </View>
            <View style={styles.transparent} className='absolute bottom-16 flex-1 pb-6 pt-6 justify-center items-center w-11/12 rounded-3xl'
            >
                <TouchableOpacity
                    className="rounded-2xl py-3 mb-4 w-11/12" style={{ backgroundColor: colors.btn1 }}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text className="text-black text-center font-bold text-lg">Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: colors.btn2 }} onPress={() => removeToken()}
                    className="rounded-2xl py-3 w-11/12"
                >
                    <Text className="text-white text-center font-bold text-lg " >Create Account</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: Colors.background
    },
    transparent: {
        backgroundColor: '#00000060'
    }
})





export default Welcome

