import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity} from 'react-native';
import api from '../components/Api/api'

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const onRequest = async () => {


      try {
        
        if(typeof usuario == "undefined"){

          alert("Email ou senha estão inválidos");
        }else{
          
          navigation.navigate('ClassList')
          // const {data} = await api.post('usuario', { ...this.usuario });
        }

        // usuario = {
        //   email: email,
        //   senha: senha,
        // }
  
  
      } catch (error) {
  
        console.log(error)
        
      }
  
    }

    return(
        <View style={style.main}>
          <View>
            <Image source={require('../../assets/splash.png')} style={style.imagemLogo}/>
            <Text style={style.texto}>Realize o Login para continuar</Text>
          </View>

          <View>
              <TextInput onChangeText={setEmail} style={style.input} placeholder="Digite o email do usuário"/>
              <TextInput onChangeText={setSenha} style={style.input} placeholder="Digite sua senha"/>
              <TouchableOpacity onPress={() => onRequest()} style={style.botao}>
                <Text style={{color:'#fff', fontSize: 16, textAlign: 'center'}}>Entrar</Text>
              </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={style.botaoCadastro} onPress={ () => navigation.navigate('Signup')}>
              <Text style={{color:'#fff', fontSize: 16, textAlign: 'center'}}>Criar uma Conta!</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={style.botaoGoogle}>
              <Image source={require('../../assets/google.png')} style={style.logoGoogle}/>
              <Text style={{color:'#4C4C61', fontSize: 16}}>Entrar com Google</Text>
            </TouchableOpacity> */}
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
      backgroundColor: '#FEDB81'
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
      width:100, 
      height: 100,
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
      marginTop: 20,
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
      marginTop: 150,
      padding: 10,
      backgroundColor: '#FDBFA8'
    },
    
});