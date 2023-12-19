import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../../../services/constants/styles'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'

const WIDTH_BAR = 127
const HEIGHT_BAR = 5

export default function DisplayerProgressInitProfile({step}) {

    const [firstMount, setFirstMount] = useState(true)

    const widthBar = useSharedValue(WIDTH_BAR / 3)

    useEffect(() => {
        if(firstMount) {
            setFirstMount(false)
            return
        }
        console.log('step', step);

        const widthBarCalculated = step * (WIDTH_BAR / 3)
        widthBar.value = withTiming(widthBarCalculated)
    }, [step])
    console.log(widthBar.value);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
            style={{
                height: HEIGHT_BAR,
                width: WIDTH_BAR,
                backgroundColor: COLORS.lightGrey,
                borderRadius: 1000
            }}>
                <Animated.View
                style={{
                    height: HEIGHT_BAR,
                    width: widthBar,
                    backgroundColor: COLORS.darkBlue,
                    borderRadius: 1000
                }}></Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})