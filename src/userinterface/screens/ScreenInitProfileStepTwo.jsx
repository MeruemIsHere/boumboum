import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, STYLE } from '../../services/constants/styles'
import ButtonCallToAction from '../components/Buttons/ButtonCallToAction'
import BluredCircle from '../components/Shapes/BluredCircle'
import FormInitProfile from '../components/Forms/FormInitProfile'

export default function ScreenInitProfileStepTwo({navigation}) {

    function handleNextStep() {
        navigation.navigate('stepThree')
    }

    return (
        <View style={styles.container}>
            <View>
                <Text
                style={[
                    STYLE.h2
                ]}>
                    Tell us more about you
                </Text>
            </View>
            
            <View style={{flex: 1, paddingVertical: 35, gap: 32}}>
                <FormInitProfile />
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