import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import AnimatedLogoScreenStart from '../components/_Animated/ScreenStart/AnimatedLogoScreenStart'
import AnimatedTitleAppScreenStart from '../components/_Animated/ScreenStart/AnimatedTitleAppScreenStart'
import AnimatedTopSectionScreenStart from '../components/_Animated/ScreenStart/AnimatedTopSectionScreenStart'
import AnimatedBottomSectionScreenStart from '../components/_Animated/ScreenStart/AnimatedBottomSectionScreenStart'
import AnimatedBGScreenStart from '../components/_Animated/ScreenStart/AnimatedBGScreenStart'

export default function ScreenStart() {

  return (
    <View style={styles.container}>
      <AnimatedBGScreenStart withDelayStart />

      <AnimatedTopSectionScreenStart />
      
      <View style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <AnimatedLogoScreenStart />
          <AnimatedTitleAppScreenStart />
        </View>

        <AnimatedBottomSectionScreenStart />
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }
})