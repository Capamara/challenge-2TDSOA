import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";
import profileBG from '../../../assets/profileBg.png'
import profilePic from '../../../assets/profilePic.png'

const width = Dimensions.get("screen").width

export default function Profile() {
    return <>
    <View style={estilos.divTopo}>
        <Image source={profileBG} style={estilos.imgTop}/>
        <Image source={profilePic} style={estilos.imgProfile}/>
    </View>
    <View style={estilos.divName}>
        <Text style={estilos.name}>Ricardo Faria</Text>
        <Text>São Paulo, Brasil</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    imgTop:{
        width: "100%",
    },
    imgProfile:{
        position: "absolute",
        top: 30,
        display: "flex",
    },
    divTopo:{
        position: "relative",
        display: "flex",
        alignItems: "center"
    },
    divName:{
        display: "flex",
        alignItems: "center",
        marginTop: 15
    },
    name:{
        fontSize: 32,
        color: "#52665A",
        weight: "bold"
    },
    location:{
        fontSize: 15
    }
})