import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated'
import { DELAY_LOADING, DELAY_SECOND_ANIMATION, DURATION_SECOND_ANIMATION } from './_constant'
import useGetterSizeComponent from '../../../../services/hooks/useGetterSizeComponent'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../../../services/constants/styles'

const RATIO_IMAGE = 65 / 86
const DELAY_GETTER_SIZE = 100

export default function AnimatedTopSectionScreenStart() {

    const {handleOnLayout, containerHeight} = useGetterSizeComponent()

    const imageFlex = useSharedValue(1.3)
    const imageOpacity = useSharedValue(0)

    useEffect(() => {
        imageFlex.value = withSequence(
            withDelay(DELAY_GETTER_SIZE, withTiming(1, {duration: 0})),
            withDelay(DELAY_SECOND_ANIMATION - DELAY_GETTER_SIZE, withTiming(1.3, {duration: DURATION_SECOND_ANIMATION}))
        )
        imageOpacity.value = withDelay(DELAY_SECOND_ANIMATION, withTiming(1, {duration: DURATION_SECOND_ANIMATION}))
    }, [])
    
    return (
        <>
            <Animated.View 
            onLayout={handleOnLayout}
            style={{flex: imageFlex, width: '100%', alignItems: 'flex-end'}}
            >
                <View style={{height: containerHeight, aspectRatio: RATIO_IMAGE, position: 'absolute', bottom: 0}}>
                    <Animated.Image 
                    source={require('../../../../../assets/images/girl_start_screen.webp')}
                    style={{
                        height: containerHeight,
                        // width: undefined,
                        aspectRatio: RATIO_IMAGE,
                        opacity: imageOpacity,
                    }}
                    />
                </View>
                <LinearGradient 
                colors={["#ffffff00", '#fff']}
                start={{x: 0, y: 0.8}}
                end={{x: 0, y: 1}}
                style={{
                    flex: 1, 
                    width: '100%', 
                    alignItems: 'flex-end'
                }}>
                </LinearGradient>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({})