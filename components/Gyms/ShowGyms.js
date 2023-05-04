import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getGymsAroundMe } from '../../store/Gyms'

const ShowGyms = () => {
    const dispatch = useDispatch()
    const gym = useSelector((state) => state.gym.gyms)
    useEffect(() => {
        const getGyms = async () => {
            const token = await AsyncStorage.getItem('@authToken')
            dispatch(getGymsAroundMe(token))
        }


        getGyms()

    }, [])
    return (
        <View>
            {gym ?
                gym.map((g) => (
                    <View>
                        <Text className='text-white'>{g.name}</Text>
                        <Text className='text-white'>{g.business_status}</Text>
                    </View>
                ))

                : <Text>no gyms</Text>}
            <Text>ShowGyms</Text>
        </View>
    )
}

export default ShowGyms