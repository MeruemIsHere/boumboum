import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UploaderProfilePicture from '../components/_Workers/Uploaders/UploaderProfilePicture'
import ButtonCallToAction from '../components/Buttons/ButtonCallToAction'
import { COLORS, STYLE } from '../../services/constants/styles'

export default function ScreenInitProfileStepOne({navigation}) {

    function handleNextStep() {
        navigation.navigate('stepTwo')
    }

    return (
        <View style={styles.container}>
            <View>
                <Text
                style={[
                    STYLE.h2
                ]}>
                    Upload profile picture
                </Text>
            </View>
            
            <View style={{alignSelf: 'center'}}>
                <UploaderProfilePicture />
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