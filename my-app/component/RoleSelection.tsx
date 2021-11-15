import {Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "../style/MonStyle"


const RoleSelection = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Chose your role !</Text>
            <View style={{ flexDirection:"row" , flex:2}}>
                <Pressable onPress={() => navigation.navigate('Lobby', {role : 'desamorceur'})} style={styles.pressed}><Text style={styles.pressedText}>Désamorceur</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Lobby', {role : 'informateur'})} style={styles.pressed}><Text style={styles.pressedText}>Informateur</Text></Pressable>
            </View>
        </View>
    )
}
export default RoleSelection;
