import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Achievements(){
    return <>
        <Text style={estilos.conquista}>Conquistas</Text>
    </>
}

const estilos = StyleSheet.create({
    conquista:{
        fontSize: 25,
        color: "#52665A",
        textAlign: "center"
    }
})