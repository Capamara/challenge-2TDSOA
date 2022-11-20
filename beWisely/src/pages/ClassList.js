import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { Book, Calendar, Clock, Feather, Star } from 'react-native-feather';
// import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import { Rating } from 'react-native-ratings';
import { ScheduleModal } from '../components/ScheduleModal';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';


// a página deve conter um texto de "agende sua aula" abaixo um card com um icon o nome do professor e estrelas de avaliação. abaixo um input com icon de calendario onde o usuario pode selecionar a data. abaixo um input com icon de relogio onde o usuario pode selecionar o horario. abaixo um input com icon de local onde o usuario pode selecionar o local. abaixo um botão com o texto "agendar aula"
export default function ClassList({navigation}) {

  const ShowSchedule = (nome, rating) => {

    try{
      usuario = {
        nome: usuario.nome,
        professorSelecionado: nome,
        rating: rating,
      }
      console.log(usuario)
      navigation.navigate('Schedule')
    } catch (error) {

      console.log(error)
      
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>Escolha um Professor(a)</Text>
        <TouchableOpacity onPress={() => ShowSchedule("João Pedro", 3.5)}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image
              source={require('../../assets/profilePic.png')}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>João Pedro</Text>
              <View style={styles.stars}>
                <Rating
                  type='star'
                  ratingCount={5}
                  startingValue={3.5}
                  imageSize={15}
                  readonly
                // onFinishRating={this.ratingCompleted}
                />
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ShowSchedule("Gabriel Capivara", 1.3)}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image
              source={require('../../assets/profilePic.png')}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>Gabriel Capivara</Text>
              <View style={styles.stars}>
                <Rating
                  type='star'
                  ratingCount={5}
                  startingValue={1.3}
                  imageSize={15}
                  readonly
                // onFinishRating={this.ratingCompleted}
                />
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ShowSchedule("Caio Ioda", 5)}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image
              source={require('../../assets/profilePic.png')}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>Caio Ioda</Text>
              <View style={styles.stars}>
                <Rating
                  type='star'
                  ratingCount={5}
                  startingValue={5}
                  imageSize={15}
                  readonly
                // onFinishRating={this.ratingCompleted}
                />
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bar}>
            <Icon style ={styles.iconStyle} name="hearto"></Icon>
            <Icon style ={styles.iconStyle} name="bars"></Icon>
            <Icon onPress={() => navigation.navigate('Profile')} style ={styles.iconStyle} name="user"></Icon>
            <Icon onPress={() => navigation.navigate('ClassList')} style ={styles.iconStyle} name="search1"></Icon>
            <Icon style ={styles.iconStyle} name="wallet"></Icon>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 40,
    alignItems: 'center',
  },
  containerBottom: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Jost_600SemiBold',
    color: '#52665A',
    fontSize: 30,
  },
  subtitle: {
    fontFamily: 'Jost_400Regular',
    color: '#52665A',
    fontSize: 20,
    marginTop: 20
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#FFDB9A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  info: {
    marginLeft: 16,
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Inter_700Bold',
    color: '#52665A',
    fontSize: 20,
  },
  stars: {
    backgroundColor: '#fff',
    borderRadius: 32,
    borderWidth: 4,
    borderColor: '#fff',
    flexDirection: 'row',
    marginTop: 4,
    paddingHorizontal: 8,
  },
  cardContent: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  inputText: {
    flex: 1,
    height: 54,
    color: '#6a6180',
    fontFamily: 'Jost_400Regular',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#FFDB9A',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Jost_500Medium',
    fontSize: 20,
  },
  inputCheckboxText: {
    fontFamily: 'Jost_400Regular',
    fontSize: 16,
    marginLeft: 16,
    color: '#c1bccc',
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 50,
    color: 'grey'
  },
  bar: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
  },
  iconStyle:{
      fontSize:40,
      color:'grey'
  },
});