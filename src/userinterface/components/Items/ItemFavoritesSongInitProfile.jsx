import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, STYLE } from '../../../services/constants/styles'
import { useNavigation } from '@react-navigation/native'

const SIZE_IMAGE = 60
const IMAGE_QUEEN = require('../../../../assets/_temp/queen-song.jpg')
const IMAGE_TOPLOADER = require('../../../../assets/_temp/toploader-song.jpg')
const IMAGE_DAMSO = require('../../../../assets/_temp/damso-song.webp')
const IMAGE_ORELSAN = require('../../../../assets/_temp/orelsan-song.webp')
const IMAGE_FAYE = require('../../../../assets/_temp/gael-faye-song.jpg')

const SIZE_ICON = 16

export default function ItemFavoritesSongInitProfile({song}) {

    const navigation = useNavigation()

    let image

    if(song.artist === 'Queen') image = IMAGE_QUEEN
    if(song.artist === 'Toploader') image = IMAGE_TOPLOADER
    if(song.artist === 'Damso') image = IMAGE_DAMSO
    if(song.artist === 'Orelsan') image = IMAGE_ORELSAN
    if(song.artist === 'Gael Faye') image = IMAGE_FAYE
    

    function handleOnPress() {
        navigation.navigate('search song')
    }

    return (
        <Pressable 
        onPress={handleOnPress}
        style={styles.container}>
            <View style={{
                height: SIZE_IMAGE,
                aspectRatio: 1 / 1,
                borderRadius: 10,
                elevation: 5
            }}>
                {
                    song.image ? (
                        <Image 
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                        }}
                        source={image}
                        />
                    ) : null
                }
            </View>

            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontFamily: 'PlusJakartaSansBold', fontSize: 16}}>{song.title}</Text>
                <Text style={[STYLE.p, {color: COLORS.lightGrey}]}>{song.artist}</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                style={{
                    width: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: 1/1,
                    backgroundColor: COLORS.pink,
                    borderRadius: 4,
                    elevation: 5
                }}
                >
                    <Image 
                    style={{
                        width: SIZE_ICON,
                        height: SIZE_ICON
                    }}
                    source={require('../../../../assets/icons/checked-icon.png')}
                    /> 
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
        marginHorizontal: 35,
        elevation: 5,
    }
})