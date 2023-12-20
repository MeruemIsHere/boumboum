import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, STYLE } from '../../../services/constants/styles'
import MaleIcon from '../../../../assets/icons/male-icon.svg'
import FemaleIcon from '../../../../assets/icons/female-icon.svg'
import NoSpecificIcon from '../../../../assets/icons/nospecific-icon.svg'



const SIZE_ICON = 24

export default function CheckBoxGender({gender = '', genderSelected, setGenderSelected}) {

    const isSelected = gender  === genderSelected

    const textColor = isSelected ? "white" : COLORS.darkBlue 
    const bgColor = isSelected ? COLORS.darkBlue : "white"

    function displayIcon() {
        if(gender === "Male") return <MaleIcon width={SIZE_ICON} height={SIZE_ICON} color={textColor} />

        if(gender === "Female") return <FemaleIcon width={SIZE_ICON} height={SIZE_ICON} color={textColor} />
        
        if(gender === "No specific") return <NoSpecificIcon width={SIZE_ICON} height={SIZE_ICON} color={textColor} />
    }


    return (
        <>
            <Pressable 
            onPress={() => setGenderSelected(gender)}
            style={{
                flexDirection: 'row',
                gap: 4,
                padding: 8,
                borderRadius: 8,
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {displayIcon()}
                <Text style={[STYLE.p, {color: textColor}]}>{gender}</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({})