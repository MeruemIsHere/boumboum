import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedBGScreenStart from '../components/_Animated/ScreenStart/AnimatedBGScreenStart'
import LogoSVG from '../../../assets/icons/logo.svg'
import ButtonCallToAction from '../components/Buttons/ButtonCallToAction'
import { COLORS, STYLE } from '../../services/constants/styles'


const SIZE_LOGO = 50

export default function ScreenStartMatching() {
    return (
        <View style={styles.container}>
            <AnimatedBGScreenStart />

            <View style={{flex: 1, alignItems: 'stretch', padding: 35, gap: 50}}>
                <View 
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 20
                }}>
                    <LogoSVG width={SIZE_LOGO} height={SIZE_LOGO} />
                    
                    <Image 
                    source={require('../../../assets/images/name_app.png')}
                    resizeMode='contain'
                    style={{
                        height: 20,
                        width: 143,
                    }}
                    />
                </View>

                <View
                style={{
                    flex: 1.3,
                    alignItems: 'center'
                }}
                >
                    <Text style={[STYLE.h2]}>Welcome music lover</Text>
                    <Text style={[STYLE.p, {color: COLORS.lightGrey}]}>Let’s try to find your music mate</Text>
                </View>

                <ButtonCallToAction>
                    <Text 
                    style={[
                        STYLE.textButton
                    ]}>
                        Start matching
                    </Text>
                </ButtonCallToAction>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'relative',
    }
})