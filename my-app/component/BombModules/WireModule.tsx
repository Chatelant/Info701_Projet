import React, {Component} from "react";
import {Pressable, Text, ToastAndroid, View} from "react-native";
import {height, styles, width} from "../../style/MonStyle";
import Svg, {Line, Polyline, Rect, Text as SVGText} from "react-native-svg";


const WireModule = (props) => {
    console.log(props.bombe.state.modules);
    console.log(props.bombe.state.wrongAnswer);
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
                <Line x1="20%" y1="25%" x2="15%" y2="80%" stroke="red" strokeLinecap={"round"} strokeWidth="25" onPress={()=> props.bombe.answer('M3')}/>
                <Line x1="35%" y1="25%" x2="40%" y2="80%" stroke="yellow" strokeLinecap={"round"} strokeWidth="25" onPress={()=> props.bombe.incrWrongAnswer()}/>
                <Line x1="52%" y1="25%" x2="60%" y2="80%" stroke="green" strokeLinecap={"round"} strokeWidth="25" onPress={()=> props.bombe.incrWrongAnswer()}/>
                <Line x1="70%" y1="25%" x2="80%" y2="80%" stroke="black" strokeLinecap={"round"} strokeWidth="25" onPress={()=> props.bombe.incrWrongAnswer()}/>
            </Svg>
        </View>
    );
}
export default WireModule;
