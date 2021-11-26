import { Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"

const informatorMenu = ({navigation}) => {
    return (
        <View style={styles.containerInformatorMenu}>
            <Pressable onPress={() => navigation.navigate('InformatorWireLayout')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Wire</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Play</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Play</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Play</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Play</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Play</Text></Pressable>
        </View>
    )
}
export default informatorMenu;