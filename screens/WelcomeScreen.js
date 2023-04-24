import { View, Text, useColorScheme, StyleSheet, Appearance, AppearanceProvider } from 'react-native'
import React from 'react'
import Welcome from '../components/Welcome'
import { useTheme } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const WelcomeScreen = () => {
  const { colors } = useTheme()

  return (
    <View style={[styles.bg]} className=" flex-1">
      <Welcome />
    </View>
  )
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.background
  },
  light: {
    backgroundColor: '#242c40'
  }
})



export default WelcomeScreen