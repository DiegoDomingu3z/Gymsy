import { View, Text, useColorScheme, StyleSheet, Appearance, AppearanceProvider} from 'react-native'
import React from 'react'
import Welcome from '../components/Welcome'
import { useTheme } from '@react-navigation/native'



const WelcomeScreen = () => {
  const {colors} = useTheme()
 
  return (
    <View className="bg-[#FED766] flex-1">
        <Welcome/>
    </View>
  )
}
export default WelcomeScreen