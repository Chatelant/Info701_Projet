import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../style/MonStyle"
import InformatorMenu from "./informatorMenu"

const informatorSerialNumber = ({ navigation }) => {
    return (
        <View style={styles.containerMenu}>
            <InformatorMenu navigation={navigation} />
            <Text style={{ textAlign: 'center', marginTop: '15%', marginRight: '25%', marginLeft: '5%', fontSize: 20 }}>
                Le numéro de série permettera de donner des indices sur comment procéder au désamorçage d'autres modules
            </Text>
        </View>
    )
}
export default informatorSerialNumber;