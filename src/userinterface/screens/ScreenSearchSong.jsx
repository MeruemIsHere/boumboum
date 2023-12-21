import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenSearchSong() {
    return (
        <View style={styles.container}>
            <Text>Screen Search Song</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 35,
    }
})