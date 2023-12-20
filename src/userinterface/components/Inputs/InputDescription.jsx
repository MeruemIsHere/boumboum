import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STYLE } from '../../../services/constants/styles'
import { TextInput } from 'react-native-gesture-handler'

export default function InputDescription() {

    // FIXME: fix keyboard behavior
    return (
        <KeyboardAvoidingView
        behavior='height'
        keyboardVerticalOffset={75}
        >
            <Text style={[STYLE.label]}>Brief description</Text>
            <TextInput 
            style={[STYLE.input, STYLE.p]}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({})