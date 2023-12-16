import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStart from './src/services/navigation/NavigationStart';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent />
        <NavigationStart />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
