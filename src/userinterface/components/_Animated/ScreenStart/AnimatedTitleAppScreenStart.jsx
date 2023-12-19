import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { DELAY_SECOND_ANIMATION, DELAY_THIRD_ANIMATION, DURATION_SECOND_ANIMATION, DURATION_THIRD_ANIMATION } from './_constant'
import { SIZE } from '../../../../services/constants/styles'

export default function AnimatedTitleAppScreenStart() {
    const titleAppWidth = useSharedValue(0)
    const titleAppOpacity = useSharedValue(0)
    // const titleAppTranslateY = useSharedValue(15)
    const maskWidth = useSharedValue('100%')

    useEffect(() => {
        titleAppWidth.value = withDelay(DELAY_SECOND_ANIMATION, withTiming(160, {duration: DURATION_SECOND_ANIMATION}))
    
        titleAppOpacity.value = withDelay(DELAY_SECOND_ANIMATION, withTiming(1, {duration: 0}))
        // titleAppTranslateY.value = withDelay(DELAY_THIRD_ANIMATION, withTiming(0, {duration: DURATION_THIRD_ANIMATION}))

        maskWidth.value = withDelay(DELAY_SECOND_ANIMATION, withTiming('0%', {duration: DURATION_SECOND_ANIMATION}))
    }, [])

    return (
        <>
            <Animated.View 
            style={{
                justifyContent: 'center', 
                alignItems: 'center', 
                width: titleAppWidth, 
                opacity: titleAppOpacity,
                // transform: [{translateY: titleAppTranslateY}]
            }}>
                <View 
                style={{
                    position: 'absolute', 
                    top: 0, 
                    left: 10, 
                    width: 160, 
                    height: SIZE.startLogo, 
                }}>
                    {/* <Text style={{fontWeight: 'bold', fontSize: 24, position: 'absolute', paddingLeft: 10}}>BoumBoum</Text> */}
                    <View
                    style={{
                        // borderWidth: 1,
                        // height: 35 ,
                        width: 120
                    }}>
                        <Image 
                        source={require('../../../../../assets/images/name_app.png')}
                        resizeMode='contain'
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                        />
                        <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            // borderWidth: 2,
                            width: '100%',
                            height: '100%',
                            alignItems: 'flex-end'
                        }}>
                            <Animated.View
                            style={{
                                width: maskWidth,
                                height: '100%',
                                backgroundColor: 'white',
                            }}>

                            </Animated.View>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({})