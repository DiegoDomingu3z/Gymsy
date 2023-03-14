import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useState } from 'react';


const MainFooter = () => {
  const { colors } = useTheme()
  const [friends, setFriends] = useState(false)
  const [feed, setFeed] = useState(true)
  const [chat, setChat] = useState(false)
  const navigation = useNavigation()

  const goToFriends = () => {
    navigation.navigate("FriendScreen")
    setFriends(true)
    setFeed(false)
    setChat(true)
  }

  const goToChat = () => {
    navigation.navigate("ChatScreen")
    setChat(true)
    setFriends(false)
    setFeed(false)
  }

  const goToFeed = () => {
    navigation.navigate("Home")
    setFeed(true)
    setFriends(false)
    setChat(false)
  }




  return (
    <View className="flex flex-row justify-around">
      <TouchableOpacity onPress={() => goToFriends()}>
        <Text className="text-white">
          <Ionicons name="ios-person-add-outline" size={32} color={colors.btn2} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToFeed()}>
        <Text className="text-white">
          <Ionicons name="md-barbell-sharp" size={32} color={colors.btn1} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToChat()}>
        <Text className="text-white">
          <Ionicons name="md-chatbubble-ellipses-outline" size={32} color={colors.btn2} />
        </Text>
      </TouchableOpacity>
    </View >
  )
}

export default MainFooter