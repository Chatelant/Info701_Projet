import React, { Component } from 'react';
import { Text, View, Image, StatusBar, ToastAndroid } from 'react-native';
import { styles, width, height } from "../style/MonStyle";
import CountDownComponent from "./BombModules/CountDownComponent";
import Detonator from "./BombModules/Detonator";
import WireModule from "./BombModules/WireModule";
import KeyPad from "./BombModules/Keypad";
import SerialNumber from "./BombModules/SerialNumber";

/// Contient le jeu et affiche les modules.
/// Les modules intéragissent avec le jeu pour indiquer si ils ont été correctement validé
/// Dans le cas contraire, ils préviennent le jeu d'une erreur, ce dernier incrémente le nombre d'erreurs

class Bombe extends Component {
    private wrongAnswerAllowed = 3;
    state = {
        countDown: 180,    // Entiers correspondant au temps accordé, transfomé en str pour l'affichage ensuite.
        wrongAnswer: 0,     // Nombre d'erreurs courrante
        modules: { 'M1': false, 'M2': true, 'M3': false, 'M4': false, 'M5': true, 'M6': false }, //TODO enlever le true du M5
    }
    answer(moduleName) {
        this.state.modules[moduleName] = true;
        this.checkVictory();
    }

    incrWrongAnswer() {
        this.state.wrongAnswer++;
        this.checkVictory();
    }

    checkVictory() {
        if (this.state.modules['M1'] === true &&
            this.state.modules['M2'] === true &&
            this.state.modules['M3'] === true &&
            this.state.modules['M4'] === true &&
            this.state.modules['M5'] === true &&
            this.state.modules['M6'] === true) {
            ToastAndroid.show("Victoire ! ", ToastAndroid.LONG);
        }
        if (this.state.wrongAnswer >= this.wrongAnswerAllowed) {
            ToastAndroid.show("Defaite !", ToastAndroid.SHORT);
        }
    }

    CountDown() {
        const [counter, setCounter] = React.useState(this.state.countDown);

        React.useEffect(() => {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }, [counter]);

        // Vérification de fin
        if (counter == 0) {
            // @ts-ignore
            this.state.modules['M2'] = false;
            this.checkVictory();
        }
        // @ts-ignore
        this.state.countDown = (Math.floor(counter.valueOf() / 60).toString().concat(" : ").concat((counter.valueOf() % 60).toString()));
        return this.state.countDown;
    }

    render() {

        return (

            <View style={{ flexDirection: "column", width: width, height: height, justifyContent: "center", }}>
                <StatusBar
                    animated={false}
                    backgroundColor="#000"
                    hidden={true} />

                <View style={{ flexDirection: "row", flex: 1 }}>
                    {/*Module 1*/}
                    <View style={styles.moduleView}><KeyPad bombe={this} /></View>
                    {/*Module 2*/}
                    <View style={styles.moduleView}><CountDownComponent bombe={this} /></View>
                    {/*Module 3*/}
                    <View style={styles.moduleView}><WireModule bombe={this} /></View>
                </View>

                <View style={{ flexDirection: "row", flex: 1 }}>
                    {/*Module 4*/}
                    <View style={styles.moduleView}><SerialNumber bombe={this} /></View>
                    {/*Module 5*/}
                    <View style={styles.moduleView} />
                    {/*Module 6*/}
                    <View style={styles.moduleView}><Detonator bombe={this} /></View>
                </View>
            </View>
        );
    }
}

export default Bombe;
