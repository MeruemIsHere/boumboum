import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DisplayerEmptyAvatar from '../Displayers/DisplayerEmptyAvatar'
import { COLORS } from '../../../../services/constants/styles'
import DisplayerUserProfilePicture from '../Displayers/DisplayerUserProfilePicture'


const SIZE_COMPONENT = 172
const COLOR_DOTTED_LINES = "#ED2272"
const SIZE_CONTAINER_EDIT_ICON = 60.56
const SIZE_EDIT_ICON = 24.23
const BORDER_CONTAINER_EDIT_ICON = 6.06

export default function UploaderProfilePicture({hasProfilePictureSelected, setProfilePicture}) {

    // TODO: HandleGetPicture
    const handleGetPicture = () => {
        setProfilePicture(true)
    }

    return (
        <>
            {/* dotted lines */}
            <Pressable
            onPress={handleGetPicture}
            style={{
                height: SIZE_COMPONENT,
                aspectRatio: 1/1,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1.21,
                borderStyle: 'dashed',
                borderRadius: SIZE_COMPONENT,
                borderColor: COLOR_DOTTED_LINES,
                padding: 10
            }}
            >
                {
                    hasProfilePictureSelected ? (
                        <DisplayerUserProfilePicture sizeComponent={SIZE_COMPONENT} />
                    ) : (
                        <DisplayerEmptyAvatar sizeComponent={SIZE_COMPONENT}/>
                    )
                }


                {/* Edit icon */}
                <View
                style={{
                    position: 'absolute',
                    bottom: SIZE_CONTAINER_EDIT_ICON / -2,
                    backgroundColor: 'white',
                    width: SIZE_CONTAINER_EDIT_ICON,
                    aspectRatio: 1/1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.darkBlue,
                    borderWidth: BORDER_CONTAINER_EDIT_ICON,
                    borderColor: 'white',
                    borderRadius: 20
                }}
                >
                    <View style={{width: SIZE_EDIT_ICON, aspectRatio: 1/1}}>
                        <Image
                        resizeMode='contain'
                        source={require('../../../../../assets/icons/edit-icon-white.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            // backgroundColor: 'grey'
                        }}
                        />
                    </View>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({})

