import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowBackIcon from '../../../../assets/icons/arrow-back.svg'
import { SIZE } from '../../../services/constants/styles'


const SIZE_BACK_ICON = 30

export default function ButtonBack({navigation}) {

    function handleBack() {
        navigation.goBack()
    }
    
    return (
        <Pressable 
        onPress={handleBack}
        style={{
            height: SIZE.backButton,
            aspectRatio: 1/1,
            // borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 5
        }}>
            <ArrowBackIcon width={SIZE_BACK_ICON} height={SIZE_BACK_ICON}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({})