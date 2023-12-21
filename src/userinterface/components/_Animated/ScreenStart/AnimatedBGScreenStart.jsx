import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../../../services/constants/styles'
import useGetterSizeComponent from '../../../../services/hooks/useGetterSizeComponent'
import AnimatedBluredPinkCircle from '../AnimatedBluredPinkCircle'
import AnimatedBluredBlueCircle from '../AnimatedBluredBlueCircle'
// import { BlurView } from '@react-native-community/blur'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { DELAY_SECOND_ANIMATION } from './_constant'

const SIZE_FIRST_CIRCLE = 356
const R_CIRCLE = 386 / 2
const BLUR = 364
// const BLUR = 0

export default function AnimatedBGScreenStart({withDelayStart = false}) {
    const {handleOnLayout, containerWidth, containerHeight} = useGetterSizeComponent()

    const opacity = useSharedValue(0)

    useEffect(() => {
        if(withDelayStart) {
            opacity.value = withDelay(DELAY_SECOND_ANIMATION, withTiming(0.25))
        } else {
            opacity.value = withTiming(0.25)
        }
    }, [])

    return (
        <Animated.View style={[styles.container, {opacity}]} onLayout={handleOnLayout}>

            {
                containerHeight && containerWidth ? (
                    <>
                        <AnimatedBluredPinkCircle cx={0} cy={0} r={R_CIRCLE} blur={BLUR} containerHeight={containerHeight} containerWidth={containerWidth} />
                        {/* <AnimatedBluredBlueCircle cx={0} cy={0} r={R_CIRCLE} blur={BLUR} /> */}
                    </>
                ) : null
            }
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute'
        // borderWidth: 4
    },
    firstCircle: {
        borderWidth: 1,
        height: SIZE_FIRST_CIRCLE,
        width: SIZE_FIRST_CIRCLE,
        borderRadius: SIZE_FIRST_CIRCLE
    }
})