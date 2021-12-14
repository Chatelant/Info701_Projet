import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../style/MonStyle";

/// Module affichant le bouton de désamorçage
const Detonator = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => { props.bombe.answer('M6'), console.log(props.bombe.state.modules); console.log(props.bombe.state.wrongAnswer) }} style={styles.roundButton}><Text style={styles.rondButtonText}>Désamorcer</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Detonator;
