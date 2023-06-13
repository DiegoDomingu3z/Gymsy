import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Gyms, { getGymsAroundMe } from '../../store/Gyms'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";
const ShowGyms = () => {
    const dispatch = useDispatch()
    const gyms = useSelector((state) => state.gym.gyms)
    useEffect(() => {
        const getGyms = async () => {
            const token = await AsyncStorage.getItem('@authToken')
            dispatch(getGymsAroundMe(token))
        }
        getGyms()
        console.log(gyms.length, 'first gym')
    }, [])
    return (
        <View className='h-screen'>
            {/* <Text>Yoooo</Text> */}
            {gyms.length > 0 ?
                <FlashList
                    data={gyms}
                    renderItem={({ item }) => {
                        const showRating = () => {
                            const roundedRating = Math.round(item.rating * 10) / 10; // Round the rating to one decimal place
                            const fullStars = Math.floor(roundedRating);
                            const hasHalfStar = roundedRating - fullStars >= 0.5;
                            console.log(fullStars, hasHalfStar)
                            return (
                                <View className="flex flex-row justify-between">
                                    <View className='flex flex-row'>
                                        {Array(fullStars)
                                            .fill(null)
                                            .map((_, index) => (
                                                <Ionicons name="star" size={15} color="yellow" />
                                            ))
                                        }
                                        {hasHalfStar == true ?
                                            <Ionicons name="star-half" size={15} color="yellow" /> : null}
                                    </View>
                                    <View className='flex flex-row'>
                                        <Ionicons name="person-circle-outline" size={17} color="black" />
                                        <Text className='ml-1'>4</Text>
                                    </View>
                                </View>
                            )
                        }
                        return (
                            <TouchableOpacity>
                                <View className='h-50 w-auto rounded-lg bg-white m-2 p-5'>
                                    <View className='flex'>
                                        <View>
                                            <Text className='text-black'>{item.name}</Text>
                                            <Text className='text-gray-400 text-xs'>{item.vicinity}</Text>
                                        </View>
                                    </View>
                                    {showRating()}
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.place_id}
                />
                :
                <View>
                    <Text>No Gyms Around Your Area</Text>
                </View>
            }
            <Text className='text-white'>This is working</Text>
        </View>

    )




}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gymName: {
        color: 'white',
    },
});

export default ShowGyms