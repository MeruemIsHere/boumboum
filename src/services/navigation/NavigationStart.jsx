import { StyleSheet } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import ScreenStart from '../../userinterface/screens/ScreenStart'
import ScreenLogged from '../../userinterface/screens/ScreenLogged'
import ScreenInitProfile from '../../userinterface/screens/ScreenInitProfile'


const Stack = createStackNavigator()

export default function NavigationStart() {
  // console.log(JSON.stringify(TransitionPresets, null, 2));
  return (
    <Stack.Navigator
    initialRouteName='start'
    screenOptions={{
      headerShown: false,
      // transitionSpec: {
      //   open: {...TransitionPresets.ModalSlideFromBottomIOS.transitionSpec.open},
      //   close: {...TransitionSpecs.TransitionIOSSpec},
      // }
    }}
    >

      <Stack.Screen 
      name="start" 
      component={ScreenStart} 
      options={{
          // headerShown: false,
      }} />

      <Stack.Screen 
      name="logged" 
      component={ScreenLogged} 
      options={{
          // headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
      }} /> 
      
      <Stack.Screen 
      name="init profile" 
      component={ScreenInitProfile} 
      options={{
        ...TransitionPresets.SlideFromRightIOS,
      }} /> 

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})