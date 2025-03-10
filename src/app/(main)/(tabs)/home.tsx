import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { addDummy } from '../../../redux/dummySlice'

const TabHome = () => {

    const dummy = useSelector((state: any) => state.dummy) // this will subscript to a particular reducer's slice
    // basically a more complex useState hook for which 
    // you have been getting your ass whooped at service based company
    // who dont care about the knowledge growth for you.
    const dispatch = useDispatch()



    return (
        <View>
            <Text>{dummy}</Text>
            <Link href='/about'>Go to about page</Link>
            <Button
                title='Update Global state'
                onPress={() => {
                    dispatch(addDummy('Good work updating the state')) // payload is still the second argument in addDummy if you remember
                    // you have already defined the callback addDummy and using it here.
                }} />

        </View>
    )
}

export default TabHome
