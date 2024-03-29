import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStart from './src/services/navigation/NavigationStart';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans': require('./assets/fonts/PlusJakartaSans.ttf'),
    'PlusJakartaSansBold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSansMedium': require('./assets/fonts/PlusJakartaSans-Medium.ttf')
  })
  
  const onLayoutRootView = useCallback(async () => {
    try {
      console.log("onLayoutRootView");
      if (fontsLoaded) {
        console.log("fontsLoaded");
        await SplashScreen.hideAsync();
        console.log("hide async");
      }
    } catch (error) {
      console.log("onLayout error:", error);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar translucent />
          <NavigationStart />
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
