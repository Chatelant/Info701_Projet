import React from 'react';
import {io} from "socket.io-client";
import {Pressable, Text, ToastAndroid, View} from "react-native";
import {styles} from "../style/MonStyle";
import publicIP from 'react-native-public-ip';

let ipv4 = null;
let role = null;

// Gestion de la connexion a la socket
publicIP()
    .then(ip => {
        ipv4 = ip;
    })
    .catch(error => {
        console.log(error);
    });

const Connection = ({navigation, route}) => {
    const socket = io('http://192.168.1.20:3000'); // Maison fix
    // const socket = io('http://192.168.1.15:3000'); // Maison portable
    // const socket = io('http://127.0.0.1:80');

    console.log("---------------\nDevice connected : ");
    console.log("ip :" + ipv4 + "\nrole : " + route.params.role);
    console.log("---------------");

    socket.on("connect", () => {
        console.log("Connect");
        socket.emit("MatchMaking", {ip: ipv4, role: route.params.role});
    });

    socket.on("disconnect", () => {
        console.log("Disconnect");
        ToastAndroid.show("Reconnexion...",ToastAndroid.SHORT)
    });


    return (
        <View style={styles.container}>
            <Text style={styles.pressedText}>MatchMaking</Text>
            <Pressable onPress={()=>socket.emit("Ping")} style={styles.pressed}><Text style={styles.pressedText}>Test Serveur</Text></Pressable>
            <Pressable onPress={()=>navigation.navigate('Bombe')} style={styles.pressed}><Text style={styles.pressedText}>Test Bombe</Text></Pressable>
        </View>
    );
}
export default Connection;
