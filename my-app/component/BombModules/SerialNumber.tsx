import React from "react";
import { Text, View } from "react-native";
import Svg, { Text as SVGText } from "react-native-svg";

/// Module Informatif affichant le numero de série
// Pas de vérification de validité nécéssaire, 
// on envoie donc une réponse positive au jeu.
const SerialNumber = (props) => {
    props.bombe.answer('M4');
    return (
        <View>
            <Svg width="100%" height="100%">
            <SVGText x="6%"
                    y="35%"
                    fontFamily="Verdana"
                    fontSize="20"
                    fill="red"
                >{"Serial number"}</SVGText>
            <SVGText x="6%"
                    y="60%"
                    fontFamily="Verdana"
                    fontSize="20"
                    fill="red"
                >{"[5035809]"}</SVGText>
            </Svg>
        </View>
    );
}

export default SerialNumber;
