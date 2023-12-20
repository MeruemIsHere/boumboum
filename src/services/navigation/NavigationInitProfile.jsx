import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HeaderInitProfile from '../../userinterface/components/Headers/HeaderInitProfile'
import ScreenInitProfileStepOne from '../../userinterface/screens/ScreenInitProfileStepOne'
import ScreenInitProfileStepTwo from '../../userinterface/screens/ScreenInitProfileStepTwo'
import ScreenInitProfileStepThree from '../../userinterface/screens/ScreenInitProfileStepThree'


const TopTab = createMaterialTopTabNavigator()

export default function NavigationInitProfil() {
  return (
    <TopTab.Navigator
    initialRouteName='stepOne'
    tabBar={props => <HeaderInitProfile {...props} />}
    
    screenOptions={{
      headerShown: false,
      swipeEnabled: false
    }}
    >

      <TopTab.Screen 
      name="stepOne" 
      component={ScreenInitProfileStepOne} 
      options={{
          // headerShown: false,
      }} />

      <TopTab.Screen 
      name="stepTwo" 
      component={ScreenInitProfileStepTwo} 
      options={{
      }} /> 

      <TopTab.Screen 
      name="stepThree" 
      component={ScreenInitProfileStepThree} 
      options={{
      }} /> 

    </TopTab.Navigator>
  )
}

const styles = StyleSheet.create({})