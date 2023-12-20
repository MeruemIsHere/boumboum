import { StyleSheet } from "react-native"

export const COLORS = {
    darkBlue: '#2F215F',
    lightGrey: '#8287A1',
    pink: '#ED2272',
    skyBlue: '#00AEEF',
    border: '#DEDEDE'
}

export const SIZE = {
    startLogo: 50,
    backButton: 50
}

export const STYLE = StyleSheet.create({
    h1: {
        fontFamily: 'PlusJakartaSansBold',
        fontSize: 32,
        color: COLORS.darkBlue
    },
    h2: {
        fontFamily: 'PlusJakartaSansMedium',
        fontSize: 24,
        color: COLORS.darkBlue
    },
    p: {
        fontFamily: 'PlusJakartaSans',
        fontSize: 13,
        color: COLORS.darkBlue
    },
    textButton: {
        fontFamily: 'PlusJakartaSansBold',
        fontSize: 15,
        color: 'white'
    },
    label: {
        fontFamily: 'PlusJakartaSans',
        fontSize: 13,
        color: COLORS.lightGrey
    },
    input: {
        borderBottomWidth: 1,
        height: 52,
        width: '100%',
        borderColor: COLORS.border
    }
})