import React from "react";
import { View, ToastAndroid } from "react-native";
import { styles } from "../../style/MonStyle";
import Svg, { Line, Rect } from "react-native-svg";

/// Module affichant les fils
// Ce dernier est en relation avec le module affichant le numéro de série
const WireModule = (props) => {

    let moduleValide = false;   // Indique si le module a été validé

    // Appelé à chaque touche d'un fil
    function setAnswer(color) {
        if (color === "red" && moduleValide === false) {
            props.bombe.answer('M3')
            ToastAndroid.show("Module validé ! ", ToastAndroid.SHORT);
            moduleValide = true;
        } else {
            if (moduleValide === false) { props.bombe.incrWrongAnswer(); }
        }
    }

    return (
        <View style={styles.container}>
            <Svg width="100%" height="100%">
                {/* Rectangle haut */}
                <Rect
                    x="5%"
                    y="15%"
                    width="75%"
                    height="10%"
                    fill="rgb(125,125,125)"
                />
                {/* Rectangle bas */}
                <Rect
                    x="5%"
                    y="80%"
                    width="85%"
                    height="10%"
                    fill="rgb(125,125,125)"
                />
                <Line x1="20%" y1="25%" x2="15%" y2="80%" stroke="red" strokeLinecap={"round"} strokeWidth="25" onPress={() => setAnswer("red")} />
                <Line x1="35%" y1="25%" x2="40%" y2="80%" stroke="yellow" strokeLinecap={"round"} strokeWidth="25" onPress={() => setAnswer("yellow")} />
                <Line x1="52%" y1="25%" x2="60%" y2="80%" stroke="green" strokeLinecap={"round"} strokeWidth="25" onPress={() => setAnswer("green")} />
                <Line x1="70%" y1="25%" x2="80%" y2="80%" stroke="black" strokeLinecap={"round"} strokeWidth="25" onPress={() => setAnswer("black")} />
            </Svg>
        </View>
    );
}
export default WireModule;
