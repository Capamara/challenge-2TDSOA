import { StatusBar } from 'expo-status-bar';
import WelcomeImage from '../src/logoWelcome.svg'
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={welcomeStyles.container}>
      <Text>Aprenda ou ensina de maneira prática e fácil</Text>
      <Image source={WelcomeImage} style={welcomeStyles.image}></Image>
      <Text>Seja aluno ou professor, a BeWisely vai te ajudar a alcançar seus objetivos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:200,
    height:200,
  }
});