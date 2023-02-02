import { View, Text, SafeAreaView } from 'react-native'
import * as React from "react"
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {


    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: null
        });
    }, [navigation]);
    return (
        // Container to give screen entire view
        <SafeAreaView>
            <Text className='text-red-500'>THis is working</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;



