import React from 'react'
import Svg, { Rect, Text as SVGText } from "react-native-svg";
import { View } from "react-native";

const CountDownComponent = (props) => {
    return (
        <View>
            {/*Contours compteur*/}
            <Svg width="100%" height="100%">
                {/*Contours compteur*/}
                <Rect
                    x="30%"
                    y="2%"
                    width="40%"
                    height="20%"
                    fill="rgb(0,0,0)"
                    strokeWidth="5"
                    stroke="rgb(125,125,125)"
                />
                {/*Text Compteur*/}
                <SVGText x="37%"
                    y="16%"
                    fontFamily="Verdana"
                    fontSize="20"
                    fill="red"
                >{props.bombe.CountDown()}
                </SVGText>
                <SVGText x="25%"
                    y="40%"
                    fontFamily="Verdana"
                    fontSize="20"
                    fill="red"
                >{"Erreurs : " + props.bombe.state.wrongAnswer}</SVGText>
            </Svg>
        </View>
    );
}

export default CountDownComponent;

