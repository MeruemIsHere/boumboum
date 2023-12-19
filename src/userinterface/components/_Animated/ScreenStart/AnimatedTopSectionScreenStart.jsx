import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { DELAY_LOADING, DELAY_SECOND_ANIMATION, DURATION_SECOND_ANIMATION } from './_constant'

const RATIO_IMAGE = 65 / 86

export default function AnimatedTopSectionScreenStart() {

    const [heightGetted, setHeightGetted] = useState(false)
    const [containerHeight, setContainerHeight] = useState(0)

    const imageFlex = useSharedValue(1)
    const imageOpacity = useSharedValue(0)

    useEffect(() => {
        // imageFlex.value = withDelay(500, withTiming(1, {duration: 0}))
        imageFlex.value = withDelay(DELAY_SECOND_ANIMATION, withTiming(1.3, {duration: DURATION_SECOND_ANIMATION}))
        imageOpacity.value = withDelay(DELAY_SECOND_ANIMATION, withTiming(1, {duration: DURATION_SECOND_ANIMATION}))
    }, [])
    

    const handleGetHeight = (event) => {
        const {height} = event.nativeEvent.layout
        if(!heightGetted) {
            setContainerHeight(height)
            setHeightGetted(true)
        }
    }

    
    return (
        <>
            <Animated.View 
            onLayout={handleGetHeight}
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
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({})