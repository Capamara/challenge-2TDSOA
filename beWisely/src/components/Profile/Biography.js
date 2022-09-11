import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function Biography() {
    return <>
        <View style={estilos.testao}>
            <View style={estilos.teste}>
                <Icon name="location-pin" size={26} style={estilos.logo}></Icon>
                <Text style={estilos.text}>Estagiário na UPA Campo Limpo</Text>
            </View>
            <View style={estilos.teste}>
                <Icon name="location-pin" size={26} style={estilos.logo}></Icon>
                <Text style={estilos.text}>Universidade Nove de Julho</Text>
            </View>
            <View style={estilos.teste}>
                <Icon name="location-pin" size={26} style={estilos.logo}></Icon>
                <Text style={estilos.text}>32 aulas assistidas</Text>
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    testao:{
        paddingTop: 30,
        paddingBottom: 30
    },
    teste:{
        flexDirection: "row",
        alignItems: "flex-start",
    },
    text:{
        fontSize: 18,
    },
    logo:{
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
    }
})