import { Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "../style/MonStyle"

/// Affichage ecran de victoire
const Victoire = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Victoire !</Text>
            <View style={{ flexDirection: "row", flex: 2 }}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.pressed}><Text style={styles.pressedText}>Retour au menu</Text></Pressable>
            </View>
        </View>
    )
}
export default Victoire;
