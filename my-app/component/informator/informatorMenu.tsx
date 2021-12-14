import { Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"

const informatorMenu = ({ navigation }) => {
    return (
        <View style={styles.containerInformatorMenu}>
            <Pressable onPress={() => navigation.navigate('InformatorKeypadLayout')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Keypad</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('InformatorCompteurLayout')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Compteur</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('InformatorWireLayout')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Wire</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('InformatorSerialNumber')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>N°Serie</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('InformatorWord')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Mot</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('InformatorDesamorcageLayout')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Desamorçage</Text></Pressable>
        </View>
    )
}
export default informatorMenu;