import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";
import profileBG from '../../../assets/profileBg.png'
import profilePic from '../../../assets/profilePic.png'
import locationLogo from '../../../assets/locationVector.png'

const width = Dimensions.get("screen").width

export default function Profile() {
    return <>
    <View style={estilos.divTopo}>
        <Image source={profileBG} style={estilos.imgTop}/>
        <Image source={profilePic} style={estilos.imgProfile}/>
    </View>
    <View style={estilos.divName}>
        <Text style={estilos.name}>Ricardo Faria</Text>
        <View style={estilos.divLocation}>
            <Image source={locationLogo} style={estilos.gapLogo}/>
            <Text>São Paulo, Brasil</Text>
        </View>
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
    },
    divTopo:{
        position: "relative",
        alignItems: "center"
    },
    divName:{
        alignItems: "center",
        marginTop: 15
    },
    name:{
        fontSize: 32,
        color: "#52665A",
        fontWeight: "bold"
    },
    divLocation:{
        flexDirection: "row",
        alignItems: "center",     
    },
    location:{
        fontSize: 15,
    },
    gapLogo:{
        marginRight: 7
    }
})