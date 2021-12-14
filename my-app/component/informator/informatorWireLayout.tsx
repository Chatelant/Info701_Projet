import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

// Affichage Informateur : Module des fils
const wireInformator = ({ navigation }) => {
  return (
    <View style={styles.containerMenu}>
      {/* Side Menu */}
      <InformatorMenu navigation={navigation} />
      <Text style={{ textAlign: 'center', marginTop: '5%', marginRight: '25%', marginLeft: '5%', fontSize: 15 }}>
        3 fils :
        S'il n'y a pas de fils rouges, coupez le deuxième fil.
        Sinon, si le dernier fil est blanc, coupez le dernier fil.
        Sinon, s'il y a plus d'un fil bleu, coupez le dernier fil bleu.
        Sinon, coupez le dernier fil.
        {"\n"}
        4 fils :
        S'il y a plus d'un fil rouge et que le dernier chiffre du numéro de série est impair, coupez le dernier fil rouge.
        Sinon, si le dernier fil est jaune et qu'il n'y a pas de fils rouges, coupez le premier fil.
        Sinon, s'il y a exactement un fil bleu, coupez le premier fil.
        Sinon, s'il y a plus d'un fil jaune, coupez le dernier fil.
        Sinon, coupez le premier fil.
        {"\n"}
        5 fils :
        Si le dernier fil est noir et que le dernier chiffre du numéro de série est impair, coupez le quatrième fil.
        Sinon, s'il y a exactement un fil rouge et plus d'un fil jaune, coupez le premier fil.
        Sinon, s'il n'y a pas de fils noirs, coupez le deuxième fil.
        Sinon, coupez le premier fil.
      </Text>
    </View>
  )
}
export default wireInformator;