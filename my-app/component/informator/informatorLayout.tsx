import { Pressable, Text, View, StyleSheet } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"

const informatorLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>layout informateur</Text>
      {/* Side Menu */}
      <View>
        <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedMenu}><Text style={styles.pressedTextMenu}>Play</Text></Pressable>
      </View>
    </View>
  )
}
export default informatorLayout;
