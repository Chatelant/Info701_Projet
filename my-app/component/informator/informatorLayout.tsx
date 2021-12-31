import { Text, View, ToastAndroid } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

// Affichage Informateur : Affichage de début de jeu de l'informateur
const informatorLayout = ({ navigation }) => {
  return (
    <View style={styles.containerMenu}>
      {/* Side Menu */}
      <InformatorMenu navigation={navigation} />
      <Text style={{ fontSize: 25, textAlign: 'center', marginTop: '22%', marginRight: '25%', marginLeft: '5%' }}>Votre but est de trouver les informations nécéssaires au désamorçage de la bombe !</Text>
    </View>
  )
}
export default informatorLayout;
