import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BluredCircle from '../../Shapes/BluredCircle'
import { COLORS } from '../../../../services/constants/styles'
// import { BlurView } from '@react-native-community/blur'

const SIZE_FIRST_CIRCLE = 356
const R_CIRCLE = 386 / 2

export default function AnimatedBGScreenStart() {
    return (
        <View style={styles.container}>
            <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                // borderWidth: 3,
                // borderColor: 'red',
                width: (R_CIRCLE * 2) + 50,
                height: '100%'
            }}
            >
                <BluredCircle cx={0} cy={0} r={R_CIRCLE} color={COLORS.pink} blur={364} />
            </View>
            <View
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                // borderWidth: 3,
                // borderColor: 'red',
                width: (R_CIRCLE * 2) + 50,
                height: '100%'
            }}
            >
                <BluredCircle cx={0} cy={0} r={R_CIRCLE} color={COLORS.pink} blur={364} />
            </View>
            {/* <BluredCircle cx={R_CIRCLE * (2/3)} cy={0} r={R_CIRCLE} color={COLORS.skyBlue} blur={0} /> */}
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