import React from "react";
import { Text, TextInput, ToastAndroid, View, Pressable } from "react-native";
import { styles } from "../../style/MonStyle";

/// Module affichant le module de recherche de mot
const Word = (props) => {
    const [text, onChangeText] = React.useState(""); // Mot contenu dans le champ texte

    let moduleValide = false;   // Indique si le module a été validé

    // Fonction qui vérifie que la réponse dans le champ texte est la bonne
    // Elle est appelée lors du clic sur le bouton "valider"
    function checkAnswer() {
        let textAnswer = text.toLowerCase();
        if (textAnswer === "peris" && moduleValide === false) {
            props.bombe.answer("M5");
            moduleValide = true;
            ToastAndroid.show("Module Validé !", ToastAndroid.SHORT);
        } else {
            if (moduleValide === false) {
                props.bombe.incrWrongAnswer();
            }
        }
    }

    return (
        <View style={[{ flex: 1, justifyContent: 'center', marginLeft: 10, marginRight: 10 }]}>
            <View>
                <Text style={[{ marginBottom: 5, color: "white", fontSize: 25, textAlign: "center" }]}>i-e-s-r-p</Text>
                <TextInput
                    style={{ backgroundColor: "'rgba(165,173,181,71)'", marginBottom: 5, textAlign: "center", height: 35 }}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View>
                <Pressable onPress={() => checkAnswer()} style={[styles.pressed, { height: 45 }]}><Text style={styles.pressedText}>valider</Text></Pressable>
            </View>
        </View>
    );
}
export default Word;