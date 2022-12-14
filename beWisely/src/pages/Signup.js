import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';
import api from '../components/Api/api';  

export default function Signup({navigation}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");

  const onRequest = async () => {


    try {

      usuario = {
        nome: name,
        email: email,
        senha: senha,
        professor: false,
        aluno: true,
        // aulasAssistidas: 12,
        // status: true,
        // dataDeCadastro: "2012-12-20",
        // dataDaUltimaAtualizacao: "2022-11-29"
      }

      // const {data} = await api.post('usuario/registrar', { ...this.usuario });
      // console.log(data);
      navigation.navigate('Login')

    } catch (error) {

      console.log(error)
      
    }

  }

    // () => navigation.navigate('Login')

    return(
        <View style={style.main}>
            <View>
                <Image source={require('../../assets/splash.png')} style={style.imagemLogo}/>
                <Text style={style.texto}>Realize o Cadastro para continuar</Text>
            </View>

            <View>
                <TextInput onChangeText={setName} style={style.input} placeholder="Digite seu nome completo"/>
                <TextInput onChangeText={setEmail} style={style.input} placeholder="Digite seu e-mail"/>
                <TextInput onChangeText={setSenha} style={style.input} placeholder="Digite sua senha"/>
                <TextInput onChangeText={setSenhaRepetida} style={style.input} placeholder="Digite a senha novamente"/>
                <TouchableOpacity onPress={() => onRequest()} style={style.botaoCadastro}>
                    <Text style={{color:'#fff', fontSize: 16, textAlign: 'center'}}>Criar Conta</Text>
                </TouchableOpacity>
            </View>

            <View></View>

            <View>
                {/* <TouchableOpacity style={style.botaoGoogle}>
                <Image source={require('../../assets/google.png')} style={style.logoGoogle}/>
                <Text style={{color:'#4C4C61', fontSize: 16}}>Registrar com Google</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={style.botao} onPress={ () => navigation.navigate('Login')}>
                  <Text style={{color:'#fff', fontSize: 16, textAlign: 'center'}}>J?? ?? cadastrado? Fa??a Login!</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

const style = StyleSheet.create({
    main:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    botao:{
      width: 250,
      borderRadius: 10,
      marginTop: 20,
      padding: 10,
      backgroundColor: '#FEDB81',
      marginTop: 150,
    },
    texto:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 26,
        marginVertical: 10,
        letterSpacing: 2
    },
    imagemLogo:{
      width:30, 
      height: 30,
      alignSelf: 'center'
    },
    input:{
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
      padding: 10,
      textAlign: 'center',
      color: '#BDC1C6'
    },
    botaoGoogle:{
      width: 250,
      borderRadius: 10,
      marginTop: 150, 
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignCenter: 'center',
      borderColor: '#BDC1C6',
      borderWidth: 1,

    },
    logoGoogle:{
      width:25, 
      height: 25
    },
    botaoCadastro:{
      width: 250,
      borderRadius: 10,
      padding: 10,
      backgroundColor: '#FDBFA8'
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
    }
});