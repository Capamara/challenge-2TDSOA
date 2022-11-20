import { SafeAreaView, Text } from 'react-native';
import Profile from './src/pages/Profile/Profile';
import Welcome from './src/pages/Welcome';
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import ClassList from './src/pages/ClassList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Schedule } from './src/pages/Schedule';
import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Jost_400Regular, Jost_500Medium, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Schedule" component={Schedule}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="ClassList" component={ClassList}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

