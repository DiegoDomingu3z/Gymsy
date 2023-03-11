import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const Header = () => {
  return (
    <View className="items-end mr-5">
      <Text className="text-white"><Ionicons name="ios-person-circle-outline" size={38} color="green" /></Text>
    </View>
  )
}

export default Header