import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { Book, Calendar, Clock, Feather, Star } from 'react-native-feather';
// import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
import { Rating } from 'react-native-ratings';
import { ScheduleModal } from '../components/ScheduleModal';
import Checkbox from 'expo-checkbox';

// a página deve conter um texto de "agende sua aula" abaixo um card com um icon o nome do professor e estrelas de avaliação. abaixo um input com icon de calendario onde o usuario pode selecionar a data. abaixo um input com icon de relogio onde o usuario pode selecionar o horario. abaixo um input com icon de local onde o usuario pode selecionar o local. abaixo um botão com o texto "agendar aula"
export const Schedule = () => {
  const [date, setDate] = useState(new Date())
  console.log(date)
  const [isSelected, setSelection] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende sua aula</Text>
      <Text style={styles.subtitle}>Professor(a)</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/61664184?v=4',
            }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>João Pedro</Text>
            <View style={styles.stars}>
              <Rating
                type='star'
                ratingCount={5}
                startingValue={4.5}
                imageSize={15}
                readonly
              // onFinishRating={this.ratingCompleted}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.input}>
            <Calendar accessibilityLabel='Calendar' color="#c1bccc" height={16} width={16} />
            <TextInput style={styles.inputText}
              onTouchStart={showDatepicker}
              placeholder="Data da aula"
              placeholderTextColor="#c1bccc" />
          </View>
          <View style={styles.input}>
            <Clock accessibilityLabel='Horário de início' color="#c1bccc" height={16} width={16} />
            <TextInput style={styles.inputText}
              onTouchStart={showTimepicker}
              placeholder="Horário de início"
              placeholderTextColor="#c1bccc" />
          </View>
          <View style={styles.input}>
            <Clock accessibilityLabel='Horário de término' color="#c1bccc" height={16} width={16} />
            <TextInput
              style={styles.inputText}
              onTouchStart={showTimepicker}
              placeholder="Horário de término"
              placeholderTextColor="#c1bccc"
            />
          </View>
          <View style={styles.input}>
            <Book accessibilityLabel='Horário de término' color="#c1bccc" height={16} width={16} />
            <TextInput
              style={styles.inputText}
              placeholder="Tema da aula"
              placeholderTextColor="#c1bccc" />
          </View>
          <View style={styles.input}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? '#4630EB' : undefined}
            />
            <Text style={styles.inputCheckboxText} >Aula particular?</Text>
          </View>
        </View>
      </View>
      <ScheduleModal />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 40,
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
    borderWidth: 4,
    borderColor: '#fff',
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
    marginTop: 8,
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
  }
});