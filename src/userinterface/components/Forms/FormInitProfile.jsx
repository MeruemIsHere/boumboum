import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputDateOfBirth from '../Inputs/InputDateOfBirth'
import InputDescription from '../Inputs/InputDescription';
import CheckBoxesGender from '../Checkboxes/CheckBoxesGender';

export default function FormInitProfile() {
    return (
        <>
            <View>
                <InputDateOfBirth />
            </View>

            <View style={{gap: 15}}>
                <CheckBoxesGender />
            </View>
            
            <View>
                <InputDescription />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})