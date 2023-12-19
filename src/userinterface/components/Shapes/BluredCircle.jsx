import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurMask, Canvas, Circle } from '@shopify/react-native-skia'

export default function BluredCircle({cx, cy, r, color, blur = 20}) {
    return (
        <>
            <Canvas style={{width:'100%', height: "100%"}}>
                <Circle cx={cx} cy={cy} r={r} color={color}>
                    <BlurMask blur={blur} style={'normal'} />
                </Circle>
            </Canvas>
        </>
    )
}

const styles = StyleSheet.create({})