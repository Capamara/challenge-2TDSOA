import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Jost_400Regular, Jost_500Medium, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Schedule } from './src/pages/Schedule';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_500Medium,
    Inter_700Bold,
    Inter_500Medium,
    Jost_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar style="auto" />
      <Schedule />
    </>
  );
}
