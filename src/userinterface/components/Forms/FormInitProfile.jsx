import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputDateOfBirth from '../Inputs/InputDateOfBirth'
import CheckBoxGender from './../Checkboxes/CheckBoxGender';
import InputDescription from '../Inputs/InputDescription';

export default function FormInitProfile() {
    return (
        <>
            <InputDateOfBirth />

            <CheckBoxGender />
            
            <InputDescription />
        </>
    )
}

const styles = StyleSheet.create({})