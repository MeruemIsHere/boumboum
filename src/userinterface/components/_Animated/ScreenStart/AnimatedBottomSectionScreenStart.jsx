import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { DELAY_FOURTH_ANIMATION, DELAY_THIRD_ANIMATION, DURATION_THIRD_ANIMATION } from './_constant'
import { COLORS, STYLE } from '../../../../services/constants/styles'
import SpotifyIcon from '../../../../../assets/icons/spotify-icon.svg'
import { useNavigation } from '@react-navigation/native'
import ButtonCallToAction from '../../Buttons/ButtonCallToAction'

export default function AnimatedBottomSectionScreenStart() {
    const navigation = useNavigation()

    const textOpacity = useSharedValue(0)
    const textTop = useSharedValue(50)

    useEffect(() => {
        textOpacity.value = withDelay(DELAY_THIRD_ANIMATION, withTiming(1, {duration: DURATION_THIRD_ANIMATION}))
        textTop.value = withDelay(DELAY_THIRD_ANIMATION, withTiming(0, {duration: DURATION_THIRD_ANIMATION}))
    }, [])


    function handleLogWithSpotify() {
        navigation.replace('logged')
    }

    return (
        <>
            <Animated.View 
            style={{
                flex: 1, 
                justifyContent: 'flex-end', 
                paddingBottom: 35, 
                gap: 25, 
                opacity: textOpacity,
                position: 'relative',
                top: textTop,
                backgroundColor: 'white'
            }}>
                <Text 
                style={[
                    STYLE.h1,
                    {
                        textAlign: 'center',
                        paddingHorizontal: 25,
                    }
                ]}>
                    Get ready for an incredible musical adventure!
                </Text>

                <View style={{marginHorizontal: 35, alignItems: 'center', justifyContent: 'center'}}>
                    <ButtonCallToAction 
                    onPress={handleLogWithSpotify}>
                        <SpotifyIcon width={20} height={20} fill={'white'} />
                        <Text 
                        style={[
                            STYLE.textButton
                        ]}>
                            Login with Spotify
                        </Text>
                    </ButtonCallToAction>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({})