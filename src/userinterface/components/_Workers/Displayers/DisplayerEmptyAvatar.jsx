import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const COLOR_BACKGROUND_EMPTY_AVATAR = "rgba(130, 135, 161, 0.1)"

export default function DisplayerEmptyAvatar({sizeComponent}) {
    return (
        <>
            <View
            style={{
                // borderWidth: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOR_BACKGROUND_EMPTY_AVATAR,
                borderRadius: sizeComponent
            }}
            >

                {/* Default image user icon */}
                <View style={{
                    width: 50,
                    aspectRatio: 1/1
                }}>
                    <Image 
                    resizeMode='contain'
                    source={require("../../../../../assets/icons/user.png")}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})