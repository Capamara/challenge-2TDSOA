import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import conq1 from '../../../assets/achievements/1x.png'
import conq2 from '../../../assets/achievements/5check.png'
import conq3 from '../../../assets/achievements/7diamantes.png'
import conq4 from '../../../assets/achievements/12disquete.png'
import conq5 from '../../../assets/achievements/14claquete.png'

export default function Achievements(){
    return <>
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
    conquista:{
        paddingBottom: 10,
        fontSize: 25,
        color: "#52665A",
        textAlign: "center"
    },
    conquistaBar:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
})