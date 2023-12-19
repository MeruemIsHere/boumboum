import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ButtonBack from '../Buttons/ButtonBack'
import DisplayerProgressInitProfile from '../_Workers/Displayers/DisplayerProgressInitProfile'
import { SIZE } from '../../../services/constants/styles'
import DisplayerStepInitProfile from '../_Workers/Displayers/DisplayerStepInitProfile'

export default function HeaderInitProfile({...props}) {
    const history = props.navigationState.history
    const routes = props.navigationState.routes
    const route = routes.find(rt => rt.key === history[history.length - 1].key)
    const indexRoute = routes.findIndex(rt => rt.key === history[history.length - 1].key)
    const step = indexRoute + 1
    // console.log(JSON.stringify(props, null, 2));

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <ButtonBack 
                goBack={props.navigation.goBack} 
                step={step}
                />
                
                <DisplayerProgressInitProfile 
                step={step}
                />

                <View style={{width: SIZE.backButton}}></View>
            </View>

            <View>
                <DisplayerStepInitProfile step={step} routes={routes} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        paddingTop: 50,
        paddingBottom: 10,
        gap: 25
    },
    header: {
        // borderWidth: 1,
        flexDirection: 'row',
    }
})