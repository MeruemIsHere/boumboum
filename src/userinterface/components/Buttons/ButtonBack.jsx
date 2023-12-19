import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '../../../../assets/icons/arrow-back.svg'
import { SIZE } from '../../../services/constants/styles'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'


const SIZE_BACK_ICON = 30

export default function ButtonBack({goBack, step}) {

    const opacity = useSharedValue(0)

    const [firstMount, setFirstMount] = useState(true)


    // FIXME: chercher pourquoi initial opacity !== 0
    useEffect(() => {
        setTimeout(() => {
            console.log('here');
            setFirstMount(false)
        }, 100)
    }, [])


    if(step === 1) {
        opacity.value = withTiming(0)
    } else {
        opacity.value = withTiming(1)
    }

    function handleBack() {
        goBack()
    }

    console.log(opacity.value, step, firstMount);
    
    return (
        <>
            {!firstMount ? (
                <Animated.View
                style={{
                    height: SIZE.backButton,
                    aspectRatio: 1/1,
                    opacity: opacity,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    elevation: 5,
                }}
                >
                    <Pressable 
                    onPress={step === 1 ? () => {} : handleBack}
                    style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ArrowBackIcon width={SIZE_BACK_ICON} height={SIZE_BACK_ICON}/>
                    </Pressable>
                </Animated.View>
            ) : (
                <View
                style={{
                    height: SIZE.backButton,
                    aspectRatio: 1/1
                }}></View>
            )}
        </>
    )
}

const styles = StyleSheet.create({})