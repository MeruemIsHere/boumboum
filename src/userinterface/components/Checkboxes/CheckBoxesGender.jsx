import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { STYLE } from '../../../services/constants/styles'
import CheckBoxGender from './CheckBoxGender';

export default function CheckBoxesGender() {

    const [genderSelected, setGenderSelected] = useState('Male')

    return (
        <>
            <Text style={[STYLE.label]}>Choose gender</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <CheckBoxGender gender={"Male"} genderSelected={genderSelected} setGenderSelected={setGenderSelected} />
                <CheckBoxGender gender={"Female"} genderSelected={genderSelected} setGenderSelected={setGenderSelected} />
                <CheckBoxGender gender={"No specific"} genderSelected={genderSelected} setGenderSelected={setGenderSelected} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})