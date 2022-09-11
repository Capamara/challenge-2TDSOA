import { StatusBar } from 'expo-status-bar';
import WelcomeImage from '../../assets/logoWelcome.png'
import { Image, StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';

export default function Welcome() {
  return <>
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.header}>Aprenda ou ensina de maneira prática e fácil</Text>
      {<Image source={WelcomeImage} style={welcomeStyles.image}/>}
      <Text style={welcomeStyles.description}>Seja aluno ou professor, a BeWisely vai te ajudar a alcançar seus objetivos</Text>
      <Icon size={30}style={welcomeStyles.iconStyle}name='right'></Icon>
      <StatusBar style="auto" />
    </View>
  </>
}

const welcomeStyles = StyleSheet.create({
  container: {
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    marginTop:30,
    marginBottom:30,
    width:'100%',
    height:300
  },
  header: {
    fontSize: 32,
    marginTop: 60,
    textAlign:'center',
    marginLeft:30,
    marginRight:30
  },
  description: {
    fontSize:16,
    textAlign:'center',
    marginLeft:30,
    marginRight:30
  },
  iconStyle: {
    marginTop:50,
    color:'white',
    padding:15,
    backgroundColor:'orange',
    borderRadius:16
  }
});