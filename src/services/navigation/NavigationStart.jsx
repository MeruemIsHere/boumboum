import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TransitionSpecs, TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import ScreenStart from '../../userinterface/screens/ScreenStart'
import ScreenLogged from '../../userinterface/screens/ScreenLogged'
import ScreenInitProfile from '../../userinterface/screens/ScreenInitProfile'


const Stack = createStackNavigator()

export default function NavigationStart() {
  return (
    <Stack.Navigator
    initialRouteName='start'
    screenOptions={{
      headerShown: false,
      // transitionSpec: {
      //   open: TransitionSpecs.FadeInFromBottomAndroidSpec,
      //   close: TransitionSpecs.TransitionIOSSpec,
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
          // gestureDirection: 'vertical',
          // transitionSpec: TransitionSpecs.TransitionIOSSpec,
      }} /> 
      
      <Stack.Screen 
      name="init profile" 
      component={ScreenInitProfile} 
      options={{
          // headerShown: false,
          // gestureDirection: 'vertical',
          // transitionSpec: TransitionSpecs.TransitionIOSSpec,
      }} /> 

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})