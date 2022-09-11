import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";
import profileBG from '../../../assets/profileBg.png'
import profilePic from '../../../assets/profilePic.png'
import bannerLogo from '../../../assets/icons/Group26.png'
import pencilLogo from '../../../assets/icons/Group25.png'
import Icon from "react-native-vector-icons/Entypo";

const width = Dimensions.get("screen").width

export default function ProfileName() {
    return <>
    <View style={estilos.divTopo}>
        <Image source={profileBG} style={estilos.imgTop}/>
        <Image source={profilePic} style={estilos.imgProfile}/>
        <Image source={bannerLogo} style={estilos.logoBanner}/>
        <Image source={pencilLogo} style={estilos.logoPencil}/>
    </View>
    <View style={estilos.divName}>
        <Text style={estilos.name}>Ricardo Faria</Text>
        <View style={estilos.divLocation}>
            <Icon name="location-pin" size={20}></Icon>
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
    logoPencil:{
        position: "absolute",
        width: 20,
        height: 20,
        top: 115,
        right: 160
    },
    logoBanner:{
        position: "absolute",
        width: 20,
        height: 20,
        left: 20,
        top: 150
    },
    divName:{
        alignItems: "center",
        marginTop: 15
    },
    name:{
        fontSize: 32,
        color: "#52665A",
        fontWeight: "bold",
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