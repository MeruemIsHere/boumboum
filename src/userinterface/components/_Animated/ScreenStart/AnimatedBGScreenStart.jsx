import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { BlurView } from '@react-native-community/blur'

const SIZE_FIRST_CIRCLE = 356

export default function AnimatedBGScreenStart() {
    return (
        <View style={styles.container}>
            {/* <BlurView 
            style={{
                borderWidth: 1,
            }}
            /> */}
            {/* <View style={styles.firstCircle}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    firstCircle: {
        borderWidth: 1,
        height: SIZE_FIRST_CIRCLE,
        width: SIZE_FIRST_CIRCLE,
        borderRadius: SIZE_FIRST_CIRCLE
    }
})