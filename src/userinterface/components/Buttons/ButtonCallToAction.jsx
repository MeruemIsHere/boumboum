import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/constants/styles'

export default function ButtonCallToAction({...props}) {
    return (
        <Pressable 
        {...props}
        style={{
            borderWidth: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            padding: 14,
            borderRadius: 10,
            backgroundColor: COLORS.darkBlue
        }}
        >
        </Pressable>
    )
}

const styles = StyleSheet.create({})