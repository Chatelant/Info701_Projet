import React from "react";
import { Image, ToastAndroid, View } from "react-native";
import { styles } from "../../style/MonStyle";
import Svg, { Rect } from "react-native-svg";
import { TouchableOpacity } from 'react-native';
import monImg from "../../assets/cl.png";

const KeyPad = (props) => {
    const showToast = () => {
        ToastAndroid.show("cliqueuuu !", ToastAndroid.SHORT);
    };
    console.log(props.bombe.state.modules);
    console.log(props.bombe.state.wrongAnswer);
    return (
        <View style={styles.container}>
            <Svg width="100%" height="100%">
                {/* Rectangle haut */}
                <Rect
                    x="5%"
                    y="5%"
                    width="90%"
                    height="90%"
                    fill="rgb(125,125,125)"
                    strokeWidth="3%"
                    stroke="rgb(0,0,0)"
                />

            </Svg>
            <TouchableOpacity activeOpacity={0.5} style={{ width: 10, height: 10 }}>
                <Image source={monImg} />
            </TouchableOpacity>
            {/* <Pressable style={styles.pressed} onPress={() => showToast()}>
                <Text>Oui bonsoir l'argent </Text>
                <Image resizeMode="contain" source={monImg} />
            </Pressable> */}
        </View>
    );
}
export default KeyPad;
