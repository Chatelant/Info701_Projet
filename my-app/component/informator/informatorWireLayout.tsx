import { Pressable, Text, View, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

const wireInformator = ({ navigation }) => {
    return (
        <View style={styles.containerMenu}>
          {/* Side Menu */}
          <InformatorMenu navigation={navigation}/>
          <Text style={{textAlign : 'center', marginTop :'22%', marginRight :'25%', marginLeft : '5%'}}>Ici trouvez les informations relatives aux fils</Text>

        </View>
        
      )
    }
export default wireInformator;