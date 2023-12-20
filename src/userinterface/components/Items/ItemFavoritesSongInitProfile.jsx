import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, STYLE } from '../../../services/constants/styles'

const SIZE_IMAGE = 60

export default function ItemFavoritesSongInitProfile({song}) {
    return (
        <Pressable style={styles.container}>
            <View style={{
                borderWidth: 1,
                height: SIZE_IMAGE,
                aspectRatio: 1 / 1
            }}>

            </View>

            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontFamily: 'PlusJakartaSansBold', fontSize: 16}}>{song.title}</Text>
                <Text style={[STYLE.p, {color: COLORS.lightGrey}]}>{song.artist}</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                style={{
                    width: 24,
                    aspectRatio: 1/1,
                    backgroundColor: COLORS.pink,
                    borderRadius: 4
                }}
                >

                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 16,
        elevation: 2,
    }
})