import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BluredCircle from '../Shapes/BluredCircle'
import { COLORS } from '../../../services/constants/styles'
import { useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'


const DURATION = 4000

export default function AnimatedBluredPinkCircle({cx, cy, r, blur, containerHeight, containerWidth}) {

    const POSITION_1 = {
        cx,
        cy
    }
    const POSITION_2 = {
        cx: cx + ((75 * containerWidth) / 100),
        cy: cy + ((25 * containerHeight) / 100)
    }
    const POSITION_3 = {
        cx: cx + ((45 * containerWidth) / 100),
        cy: cy + ((100 * containerHeight) / 100)
    }

    const cxCircle = useSharedValue(POSITION_1.cx)
    const cyCircle = useSharedValue(POSITION_1.cy)

    useEffect(() => {
        cxCircle.value = withRepeat(
            withSequence(
                withTiming(POSITION_2.cx, {duration: DURATION}),
                withTiming(POSITION_3.cx, {duration: DURATION}),
                withTiming(POSITION_1.cx, {duration: DURATION})
            ), -1
        )

        
        cyCircle.value = withRepeat(
            withSequence(
                withTiming(POSITION_2.cy, {duration: DURATION}),
                withTiming(POSITION_3.cy, {duration: DURATION}),
                withTiming(POSITION_1.cy, {duration: DURATION})
            ), -1
        )
    }, [])

    return (
        <>
            <BluredCircle cx={cxCircle} cy={cyCircle} r={r} color={COLORS.pink} blur={blur} />
        </>
    )
}

const styles = StyleSheet.create({})