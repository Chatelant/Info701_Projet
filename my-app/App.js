import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

/* Components import */
import Bombe from "./component/Bombe";
import Connection from "./component/Connection";
import Home from "./component/Home";
import RoleSelection from "./component/RoleSelection";

/* Création de la pile des vue */
const Stack = createNativeStackNavigator();

/* Home Screen */
function HomeScreen({navigation}) {
    return (
        <Home navigation={navigation}/>
    );
}

/* Lobby Screen */
// function Connexion({navigation}) {
//     return (
//         <Connection navigation={navigation}/>
//     );
// }

/* Pile de vue */
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="RoleSelection" component={RoleSelection} options={{headerShown: false}}/>
                <Stack.Screen name="Lobby" component={Connection} options={{headerShown: false}}/>
                <Stack.Screen name="Bombe" component={Bombe} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

