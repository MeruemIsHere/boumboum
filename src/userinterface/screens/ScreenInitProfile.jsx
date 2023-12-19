import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationInitProfil from '../../services/navigation/NavigationInitProfile'

export default function ScreenInitProfile() {
    return (
        <View 
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}
        >
            <NavigationInitProfil />
        </View>
    )
}

const styles = StyleSheet.create({})