import { Pressable, Text, View, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

const informatorDesamorcage = ({ navigation }) => {
    return (
        <View style={styles.containerMenu}>
          {/* Side Menu */}
          <InformatorMenu navigation={navigation}/>
          <Text style={{textAlign : 'center', marginTop :'22%', marginRight :'25%', marginLeft : '5%'}}>Désamorcez la bombe lorsque vous aurez désamorcé tous les modules. Dans le cas contraire vous perdez la partie</Text>

        </View>
        
      )
    }
export default informatorDesamorcage;