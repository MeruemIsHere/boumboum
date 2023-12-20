import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputSearchSongs from './../components/Inputs/InputSearchSongs';
import ListFavoritesSongs from '../components/Lists/ListFavoritesSongs';
import ButtonCallToAction from '../components/Buttons/ButtonCallToAction';
import { COLORS } from '../../services/constants/styles';

export default function ScreenInitProfileStepThree() {
    return (
        <View style={styles.container}>
            <View>
                <Text
                style={{
                    fontSize: 24,
                    color: COLORS.darkBlue
                }}>
                    Add favorites songs
                </Text>
                <Text
                style={{
                    fontSize: 16,
                    color: COLORS.lightGrey
                }}>
                    Here are your most listened songs
                </Text>
            </View>

            {/* <InputSearchSongs /> */}

            <ListFavoritesSongs />

            <ButtonCallToAction>
                <Text 
                style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>
                    Finish
                </Text>
            </ButtonCallToAction>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 35,
        paddingTop: 0,
        justifyContent: 'space-between'
    }
})