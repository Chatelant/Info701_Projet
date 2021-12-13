import React from "react";
import { ToastAndroid, View, ImageBackground, TouchableHighlight } from "react-native";
import { styles } from "../../style/MonStyle";

const KeyPad = (props) => {
    const showToast = () => {
        ToastAndroid.show("cliqueuuu !", ToastAndroid.SHORT);
    };

    let answer = { "1": 0, "2": 0, "3": 0, "4": 0 };
    let moduleValide = false;
    let nbPressed = 1;

    function setAnswer(numTouche) {
        answer[numTouche] = nbPressed;
        nbPressed++;
        checkVictory();
    }
    function checkVictory() {
        if (nbPressed === 5 && moduleValide === false) {
            if (answer["1"] === 3 && answer["2"] === 2 && answer["3"] === 1 && answer["4"] === 4) {
                ToastAndroid.show("Module validé ! ", ToastAndroid.SHORT);
                props.bombe.answer('M1');
            } else {
                props.bombe.incrWrongAnswer();
                answer = { "1": 0, "2": 0, "3": 0, "4": 0 };
                nbPressed = 1;
            }
        }
    }

    return (
        <View style={styles.containerMenu}>
            <View style={styles.topView}>
                <View style={styles.keypadRows}>
                    <TouchableHighlight style={[styles.touchableOpacityTouchImg]}
                        onPress={() => setAnswer("1")}>
                        <ImageBackground source={require('../../assets/n.png')} style={[styles.touchImg]}>
                        </ImageBackground>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.touchableOpacityTouchImg]}
                        onPress={() => setAnswer("2")}>
                        <ImageBackground source={require('../../assets/cl.png')} style={[styles.touchImg]}>
                        </ImageBackground>
                    </TouchableHighlight>
                </View>
                <View style={styles.keypadRows}>
                    <TouchableHighlight style={[styles.touchableOpacityTouchImg]}
                        onPress={() => setAnswer("3")}>
                        <ImageBackground source={require('../../assets/q.png')} style={[styles.touchImg]}>
                        </ImageBackground>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.touchableOpacityTouchImg]}
                        onPress={() => setAnswer("4")}>
                        <ImageBackground source={require('../../assets/interrog-reserved.png')} style={[styles.touchImg]}>
                        </ImageBackground>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}
export default KeyPad;
