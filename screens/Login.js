import {
  View, Text, TextInput, TouchableOpacity, ImageBackground, Button, KeyboardAvoidingView, Platform,
  StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import React from 'react'
import LoggingIn from '../components/LoggingIn'
import { useTheme } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View style={[styles.bg]} className="flex-1">
        <LoggingIn />
      </View>
    </SafeAreaView>
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

export default Login