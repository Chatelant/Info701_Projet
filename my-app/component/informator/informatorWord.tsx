import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

// Affichage Informateur : Module de recherche de mot
const informatorWord = ({ navigation }) => {
    return (
        <View style={[styles.containerMenu, { flex: 1 }]}>
            <InformatorMenu navigation={navigation} />
            <Text style={{ textAlign: 'center', marginTop: '5%', marginRight: '25%', marginLeft: '5%', fontSize: 20 }}>
                Votre homologue a à sa disposition une suite lettres, à vous de trouver la bonne disposition.{"\n"}
                La couleur dépend de celle du bouton de désamorçage
                {"\n"}
                {"\n"}
                x-x-x-x-x | Bleu | Vert  | Jaune | Rouge | Noir |{"\n"}
                i-e-a-s-l | salie | ailes | asile | laies | lesai |{"\n"}
                i-e-a-r-c | acier | carie | craie | ecria | creai |{"\n"}
                i-e-s-r-p | pires | epris | pries | peris | prise |{"\n"}
                e-e-l-r-g | geler | leger | regle | regel | grele |{"\n"}
                i-e-a-n-v | avine | envia | naive | vaine | veina |{"\n"}
            </Text>
        </View>
    )
}
export default informatorWord;