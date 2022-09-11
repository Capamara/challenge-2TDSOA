import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Footer() {
  return (
    <View style={footerStyle.bar}>
      <Icon style={footerStyle.iconStyle} name="hearto"></Icon>
      <Icon style={footerStyle.iconStyle} name="bars"></Icon>
      <Icon style={footerStyle.iconStyle} name="user"></Icon>
      <Icon style={footerStyle.iconStyle} name="search1"></Icon>
      <Icon style={footerStyle.iconStyle} name="wallet"></Icon>
      <StatusBar style="auto" />
    </View>
  )
}

const footerStyle = StyleSheet.create({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '25%',
    borderWidth: 0.2
  },
  iconStyle: {
    fontSize: 60,
    color: 'grey'
  }
});