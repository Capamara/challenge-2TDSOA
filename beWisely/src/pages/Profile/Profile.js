import React from "react";
import { Image, Text, StyleSheet, Dimensions, View } from "react-native";
import profileBG from '../../../assets/profileBg.png'
import profilePic from '../../../assets/profilePic.png'
import bannerLogo from '../../../assets/icons/Group26.png'
import pencilLogo from '../../../assets/icons/Group25.png'
import Icon from "react-native-vector-icons/Entypo";
import conq1 from '../../../assets/achievements/1x.png'
import conq2 from '../../../assets/achievements/5check.png'
import conq3 from '../../../assets/achievements/7diamantes.png'
import conq4 from '../../../assets/achievements/12disquete.png'
import conq5 from '../../../assets/achievements/14claquete.png'

export default function() {
    return <>
    <View style={estilos.divTopo}>
        <Image source={profileBG} style={estilos.imgTop}/>
        <Image source={profilePic} style={estilos.imgProfile}/>
        <Image source={bannerLogo} style={estilos.logoBanner}/>
        <Image source={pencilLogo} style={estilos.logoPencil}/>
    </View>
    <View style={estilos.divName}>
        <Text style={estilos.name}>João Pedro</Text>
        <View style={estilos.divLocation}>
            <Icon name="location-pin" size={20}></Icon>
            <Text>São Paulo, Brasil</Text>
        </View>
    </View>
    <View style={estilos.container}>
            <View style={estilos.row}>
                <Icon name="location-pin" size={26} style={estilos.logo}></Icon>
                <Text style={estilos.text}>Estagiário na UPA Campo Limpo</Text>
            </View>
            <View style={estilos.row}>
                <Icon name="location-pin" size={26} style={estilos.logo}></Icon>
                <Text style={estilos.text}>Universidade Nove de Julho</Text>
            </View>
            <View style={estilos.row}>
                <Icon name="location-pin" size={26} style={estilos.logo}></Icon>
                <Text style={estilos.text}>32 aulas assistidas</Text>
            </View>
        </View>
        <View>
        <Text style={estilos.conquista}>Conquistas</Text>
    </View>
    <View style={estilos.conquistaBar}>
        <Image source={conq2}/>
        <Image source={conq3}/>
        <Image source={conq4}/>
        <Image source={conq5}/>
        <Image source={conq1}/>
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
    },
    container:{
        paddingTop: 30,
        paddingBottom: 30
    },
    row:{
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
    },
    conquista:{
        paddingBottom: 10,
        fontSize: 25,
        color: "#52665A",
        textAlign: "center"
    },
    conquistaBar:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
})
        {/* <ProfileName/>
        <Biography/>
        <Achievements/> */}
