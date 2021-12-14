import React, { useState } from 'react';
import { io } from "socket.io-client";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import { styles } from "../style/MonStyle";

/// Mise en route des socket
// L'implémentation actuelle des socket permet de matcher 2 joueurs et de lancer leurs jeux en même temps
// Le matchmaking actuel permet la connexion de deux joueurs.

// Socket
let socket;
let socketId: string;

const Connection = ({ navigation, route }) => {
    // Root
    socket = io('http://192.168.1.20:3000');            // Maison fixe
    // const socket = io('http://192.168.1.15:3000');   // Maison portable

    // Connection
    socket.on("connect", () => {
        socketId = socket.id;
        console.log("Connexion de : " + socketId);
        socket.emit("rechercheJoueur", { id: socketId, role: route.params.role });
        // socket.emit("MatchMaking", { id: socketId, role: route.params.role });
    });

    // Message lançant la partie, redirection vers l'écran du role associé
    socket.on("debutPartie", () => {
        if (route.params.role === "desamorceur") {
            navigation.navigate('Bombe');
        } else if (route.params.role === "informateur") {
            navigation.navigate("InformatorLayout")
        }
    })

    socket.on("disconnect", () => {
        console.log("Disconnect");
        ToastAndroid.show("Reconnexion...", ToastAndroid.SHORT)
    });

    // Fonction retournant la route associée à l'écran de jeu correspondant au role selectioné
    function jouerOrConnexion() {
        if (route.params.role === "desamorceur") {
            return 'Bombe';
        } else {
            return 'InformatorLayout';
        }
    }

    // Vocal
    // Socket d'emission
    // const [mateSocketId, setMateSocketId] = useState("");
    // let roomId: string;
    // socket.on('voice received', function (msg) {
    //     var audio = document.querySelector('audio');
    //     audio.src = window.URL.createObjectURL(msg);
    // });
    // socket.on('voice sent', function(msg){
    //     socket.emit('voice received', msg);
    // });

    return (
        <View style={styles.container}>
            <Text style={[styles.pressedText, { textAlign: 'center' }]}>MatchMaking{"\n"}Recherche de joueur</Text>
            <Pressable onPress={() => navigation.navigate(jouerOrConnexion())} style={styles.pressed}><Text style={styles.pressedText}>Afficher jeu</Text></Pressable>
        </View>
    );
}
export default Connection;
