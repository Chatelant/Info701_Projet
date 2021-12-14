import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

// Affichage Informateur : Module Détonateur
const informatorDesamorcage = ({ navigation }) => {
  return (
    <View style={styles.containerMenu}>
      {/* Side Menu */}
      <InformatorMenu navigation={navigation} />
      <Text style={{ textAlign: 'center', marginTop: '15%', marginRight: '25%', marginLeft: '5%', fontSize: 20 }}>
        Désamorcez la bombe lorsque vous aurez désamorcé tous les modules.
        Dans le cas ou vous désamorcez la bombe avantles modules, vous engendrez une erreur.
      </Text>

    </View>

  )
}
export default informatorDesamorcage;