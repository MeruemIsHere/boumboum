import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DisplayerUserProfilePicture({sizeComponent}) {
    return (
        <>
            <Image 
            resizeMode='contain'
            style={{
                width: '100%',
                height: '100%',
                borderRadius: sizeComponent
            }}
            source={require('../../../../../assets/images/user-avatar.webp')}
            />
        </>
    )
}

const styles = StyleSheet.create({})