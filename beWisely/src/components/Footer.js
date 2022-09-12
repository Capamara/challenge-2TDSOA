import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';

export default function Footer({navigation}) {
  return <>
    <View style={footerStyle.bar}>
        <Icon style ={footerStyle.iconStyle} name="hearto"></Icon>
        <Icon style ={footerStyle.iconStyle} name="bars"></Icon>
        <Icon onPress={() => navigation.navigate('Profile')} style ={footerStyle.iconStyle} name="user"></Icon>
        <Icon style ={footerStyle.iconStyle} name="search1"></Icon>
        <Icon style ={footerStyle.iconStyle} name="wallet"></Icon>
      <StatusBar style="auto" />
    </View>
  </>
}

const footerStyle = StyleSheet.create({  
    bar: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
    },
    iconStyle:{
        fontSize:40,
        color:'grey'
    }
  });