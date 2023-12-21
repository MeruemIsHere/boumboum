import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/constants/styles'
import BluredCircle from '../Shapes/BluredCircle'

export default function AnimatedBluredBlueCircle({cx, cy, r, blur}) {
    return (
        <>
            <BluredCircle cx={cx} cy={cy} r={r} color={COLORS.skyBlue} blur={blur} />
        </>
    )
}

const styles = StyleSheet.create({})