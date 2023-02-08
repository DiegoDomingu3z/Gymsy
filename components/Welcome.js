import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()
  return (
    <View className="relative h-screen">
        <SafeAreaView>
            <View className="flex flex-col justify-center items-center mt-40">
      <Image source={require('../assets/logos/image.png')} className="object-scale-down h-80 w-80 max-w-none"/>
            </View>
            <View className="mt-40">
                <View className="flex flex-row items-center justify-center space-x-6 mt-16">
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} className="bg-[#FE4A49] rounded-lg">
                    <Text className="p-4 px-16 rounded-lg text-white">Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#009FB7] rounded-lg">
                    <Text className="p-4 px-16 text-white">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </View>
  )
}



export default Welcome