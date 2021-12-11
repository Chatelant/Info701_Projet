import React, {useState} from 'react';
import { io } from "socket.io-client";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import { styles } from "../style/MonStyle";



let role = null;
// Socket d'écoute
let socket;
let socketId: string;
// Socket d'emission
// const [mateSocketId, setMateSocketId] = useState("");
let roomId : string;



const Connection = ({ navigation, route }) => {

    // Root
    socket = io('http://192.168.1.20:3000'); // Maison fix
    // const socket = io('http://192.168.1.15:3000'); // Maison portable
    // const socket = io('http://127.0.0.1:80');


    // Connection
    socket.on("connect", () => {
        socketId = socket.id;
        console.log("Connexion de : " + socketId);
        socket.emit("rechercheJoueur",{ id: socketId, role: route.params.role });
        // socket.emit("MatchMaking", { id: socketId, role: route.params.role });
    });

    // Message lançant la partie, redirection vers l'écran du role associé
    socket.on("debutPartie", () =>{
        if(route.params.role === "desamorceur"){
            navigation.navigate('Bombe');
        }else if(route.params.role === "informateur"){
            navigation.navigate("InformatorLayout")
        }
    })

    socket.on("disconnect", () => {
        console.log("Disconnect");
        ToastAndroid.show("Reconnexion...", ToastAndroid.SHORT)    
    });




    // Vocal
    // socket.on('voice received', function (msg) {
    //     var audio = document.querySelector('audio');
    //     audio.src = window.URL.createObjectURL(msg);
    // });

    // socket.on('voice sent', function(msg){
    //     socket.emit('voice received', msg);
    // });


    return (
        <View style={styles.container}>
            <Text style={styles.pressedText}>MatchMaking</Text>
            <Pressable onPress={() => navigation.navigate('InformatorLayout')} style={styles.pressed}><Text style={styles.pressedText}>Ecran informateur</Text></Pressable>
            <Pressable onPress={() => socket.emit("Ping")} style={styles.pressed}><Text style={styles.pressedText}>Test Serveur</Text></Pressable>
            <Pressable onPress={() => navigation.navigate('Bombe')} style={styles.pressed}><Text style={styles.pressedText}>Test Bombe</Text></Pressable>
        </View>
    );
}
export default Connection;
