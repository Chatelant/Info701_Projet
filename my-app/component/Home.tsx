import {Pressable, Text, View, StyleSheet} from "react-native";
import React from "react";
import {styles} from "../style/MonStyle"

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Keep Talking And Nobobdy Explode</Text>
            <Pressable onPress={() => navigation.navigate('RoleSelection')} style={styles.pressedHome}><Text style={styles.pressedText}>Play</Text></Pressable>
            {/* <Pressable onPress={() => navigation.navigate('Lobby', {role : 'informateur'})} style={styles.pressedHome}><Text style={styles.pressedText}>test vocal</Text></Pressable> */}
        </View>
    )
}
export default Home;
