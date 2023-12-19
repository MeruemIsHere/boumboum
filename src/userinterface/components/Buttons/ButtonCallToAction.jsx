import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/constants/styles'
import BluredCircle from '../Shapes/BluredCircle'

const R_CIRCLE = 62

export default function ButtonCallToAction({...props}) {
    return (
        <Pressable 
        {...props}
        style={{
            // borderWidth: 1,
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            borderRadius: 10,
            backgroundColor: COLORS.darkBlue,
            overflow: 'hidden'
        }}
        >
            <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                // borderWidth: 3,
                // borderColor: 'red',
                width: (R_CIRCLE * 2) + 50,
                height: '100%'
            }}
            >
                <BluredCircle cx={R_CIRCLE} cy={-35} r={R_CIRCLE} color={COLORS.pink} />
            </View>
            <View
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                // borderWidth: 3,
                // borderColor: 'red',
                width: (R_CIRCLE * 2) + 50,
                height: '100%',
            }}
            >
                {/* FIXME: cx trop arbitraire. Peut ne pas être responsive */}
                <BluredCircle cx={R_CIRCLE + 45} cy={85} r={R_CIRCLE} color={COLORS.skyBlue} />
            </View>
            {props.children}
        </Pressable>
    )
}

const styles = StyleSheet.create({})