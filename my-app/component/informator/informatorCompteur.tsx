import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

// Affichage Informateur : Module Compteur
const informatorCompteur = ({ navigation }) => {
    return (
        <View style={styles.containerMenu}>
            <InformatorMenu navigation={navigation} />
            <Text style={{ textAlign: 'center', marginTop: '15%', marginRight: '25%', marginLeft: '5%', fontSize: 20 }}>
                Le module compteur sous les yeux de votre acolyte vous donne deux informations.
                {"\n"}
                Le temps restant avant l'explosion de la bombe.
                {"\n"}
                Le nombre d'erreurs de votre acolyte.
            </Text>
        </View>
    )
}
export default informatorCompteur;