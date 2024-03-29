import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZE, STYLE } from '../../services/constants/styles'
import ButtonCallToAction from '../components/Buttons/ButtonCallToAction'


const SIZE_SUCCESS_IMAGE = 225

export default function ScreenLogged({navigation}) {


    function handlePress() {
        navigation.replace('init profile')
    }


    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                resizeMode='contain'
                source={require('../../../assets/icons/Logo_large.png')}
                style={{
                height: SIZE.startLogo,
                width: SIZE.startLogo,
                }} />

                <Image 
                resizeMode='contain'
                source={require('../../../assets/images/name_app.png')}
                style={{
                height: 50,
                width: 125,
                }} />
            </View>

            <View style={{alignItems: 'center', gap: 10}}>
                <Image 
                resizeMode='contain'
                source={require('../../../assets/images/logged-success.webp')}
                style={{
                height: SIZE_SUCCESS_IMAGE,
                width: SIZE_SUCCESS_IMAGE,
                }} />

                <Text style={[
                    STYLE.h2
                ]}>
                    Logged In Successful!
                </Text>
                
                <Text style={[
                    STYLE.p, 
                    {
                        color: COLORS.lightGrey,
                        textAlign: 'center'
                    }
                ]}>
                    You have been logged in successfully. Please enter the your details to complete your profile
                </Text>
            </View>

            <ButtonCallToAction
            onPress={handlePress}>
                <Text
                style={[
                    STYLE.textButton
                ]}>
                    Continue
                </Text>
            </ButtonCallToAction>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 35,
        backgroundColor: 'white',
        paddingTop: 70,
        alignItems: 'center'
    }
})