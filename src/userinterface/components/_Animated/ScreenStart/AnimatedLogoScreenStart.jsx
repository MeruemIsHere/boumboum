import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { DELAY_LOADING, DURATION_FIRST_ANIMATION } from './_constant'
import { SIZE } from '../../../../services/constants/styles'


export default function AnimatedLogoScreenStart() {
  const logoScale = useSharedValue(70)
  const logoTranslateY = useSharedValue(-300)

  useEffect(() => {
    logoScale.value = withDelay(DELAY_LOADING, withTiming(1, {duration: DURATION_FIRST_ANIMATION}))
    logoTranslateY.value = withDelay(DELAY_LOADING, withTiming(0, {duration: DURATION_FIRST_ANIMATION}))
  }, [])

  return (
    <>
      <Animated.Image 
      resizeMode='contain'
      source={require('../../../../../assets/icons/Logo_large.png')}
      style={{
        height: SIZE.startLogo,
        width: SIZE.startLogo,
        transform: [{translateY: logoTranslateY}, {scale: logoScale}]
      }} />
    </>
  )
}

const styles = StyleSheet.create({})