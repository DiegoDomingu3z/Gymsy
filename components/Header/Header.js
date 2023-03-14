import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';


const Header = () => {
  const { colors } = useTheme();



  return (
    <View className="items-end mr-5">
      <Text className="text-white"><Ionicons name="ios-person-circle-outline" size={38} color={colors.btn1} /></Text>
    </View>
  )
}

export default Header