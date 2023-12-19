import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../services/constants/styles'
import ButtonCallToAction from '../components/Buttons/ButtonCallToAction'
import BluredCircle from '../components/Shapes/BluredCircle'

export default function ScreenInitProfileStepTwo({navigation}) {

    function handleNextStep() {
        navigation.navigate('stepThree')
    }

    return (
        <View style={styles.container}>
            <View>
                <Text
                style={{
                    fontSize: 24,
                    color: COLORS.darkBlue
                }}>
                    Tell us more about you
                </Text>
            </View>
            
            <View style={{flex: 1, borderWidth: 1}}>
                {/* TODO: create form */}
            </View>

            <View>
                <ButtonCallToAction
                onPress={handleNextStep}
                >
                    <Text 
                    style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>
                        Next step
                   </Text>
                </ButtonCallToAction>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        paddingTop: 0,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }
})