import React, {Component} from "react";
import {ImageBackground, Pressable, Text, ToastAndroid, View} from "react-native";
import {height, styles, width} from "../../style/MonStyle";
import Svg, {Line, Polyline, Rect, Text as SVGText} from "react-native-svg";
import { TouchableOpacity } from 'react-native'

const KeyPad = (props) => {
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
                    stroke = "rgb(0,0,0)"
                />
            </Svg>
            {/*<TouchableOpacity activeOpacity={0.5}>*/}
            {/*    <ImageBackground*/}
            {/*        source={require("./cl.PNG")}*/}
            {/*        //style possible*/}
            {/*    />*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
}
export default KeyPad;
