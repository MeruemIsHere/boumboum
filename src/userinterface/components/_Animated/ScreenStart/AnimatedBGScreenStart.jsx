import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../services/constants/styles'
import useGetterSizeComponent from '../../../../services/hooks/useGetterSizeComponent'
import AnimatedBluredPinkCircle from '../AnimatedBluredPinkCircle'
import AnimatedBluredBlueCircle from '../AnimatedBluredBlueCircle'
// import { BlurView } from '@react-native-community/blur'

const SIZE_FIRST_CIRCLE = 356
const R_CIRCLE = 386 / 2
const BLUR = 364
// const BLUR = 0

export default function AnimatedBGScreenStart() {
    const {handleOnLayout, containerWidth, containerHeight} = useGetterSizeComponent()


    return (
        <View style={styles.container} onLayout={handleOnLayout}>

            {
                containerHeight && containerWidth ? (
                    <>
                        <AnimatedBluredPinkCircle cx={0} cy={0} r={R_CIRCLE} blur={BLUR} containerHeight={containerHeight} containerWidth={containerWidth} />
                        <AnimatedBluredBlueCircle cx={0} cy={0} r={R_CIRCLE} blur={BLUR} />
                    </>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.25,
        // borderWidth: 4
    },
    firstCircle: {
        borderWidth: 1,
        height: SIZE_FIRST_CIRCLE,
        width: SIZE_FIRST_CIRCLE,
        borderRadius: SIZE_FIRST_CIRCLE
    }
})