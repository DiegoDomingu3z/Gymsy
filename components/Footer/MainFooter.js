import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
const MainFooter = () => {
  return (
    <View className="flex flex-row justify-around">
            <Text className="text-white"><Ionicons name="ios-person-add-outline" size={32} color="green" /></Text>
            <Text className="text-white"><Ionicons name="md-barbell-sharp" size={32} color="green" /></Text>
            <Text className="text-white"><Ionicons name="md-chatbubble-ellipses-outline" size={32} color="green" /></Text>
         </View>
  )
}

export default MainFooter