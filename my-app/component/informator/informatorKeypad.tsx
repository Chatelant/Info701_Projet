import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

// Affichage Informateur : Module Keypad
const informatorKeypad = ({ navigation }) => {
  return (
    <View style={styles.containerMenu}>
      {/* Side Menu */}
      <InformatorMenu navigation={navigation} />
      <View style={styles.topViewKeypad}>
        <Text>Touchez les boutons dans l'ordre correct du tableau de haut vers le bas{"\n"}</Text>
        <Image
          style={{ width: '60%', height: '80%', resizeMode: 'stretch' }}
          source={require('../../assets/keypad.png')}
        />
      </View>
    </View>
  )
}
export default informatorKeypad;