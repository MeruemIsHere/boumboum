import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../services/constants/styles'

export default function DisplayerStepInitProfile({step, routes}) {
    return (
        <View>
            <Text 
            style={{
                color: COLORS.lightGrey
            }}>
                Step {step} of {routes.length}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})