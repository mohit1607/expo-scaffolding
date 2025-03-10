import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabRoot = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='home' />
            <Tabs.Screen name='feepayment' />
            <Tabs.Screen name='attendance' />
        </Tabs>
    )
}

export default TabRoot