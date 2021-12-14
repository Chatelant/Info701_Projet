import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


/* Components import */
import Bombe from "./component/Bombe";
import Connection from "./component/Connection";
import Home from "./component/Home";
import RoleSelection from "./component/RoleSelection";
import informatorLayout from "./component/informator/informatorLayout"
import informatorWireLayout from "./component/informator/informatorWireLayout"
import informatorDesamorcage from "./component/informator/informatorDesamorcage"
import informatorKeypad from "./component/informator/informatorKeypad"
import informatorCompteur from "./component/informator/informatorCompteur"
import informatorSerialNumber from "./component/informator/informatorSerialNumber"
import informatorWord from "./component/informator/informatorWord"

/* Création de la pile des vue */
const Stack = createNativeStackNavigator();

/* Home Screen */
function HomeScreen({ navigation }) {
    return (
        <Home navigation={navigation} />
    );
}

/* Pile de vue */
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Navigation entre les menus */}
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RoleSelection" component={RoleSelection} options={{ headerShown: false }} />
                <Stack.Screen name="Lobby" component={Connection} options={{ headerShown: false }} />
                <Stack.Screen name="Bombe" component={Bombe} options={{ headerShown: false }} />
                {/* Coté informateur */}
                <Stack.Screen name="InformatorLayout" component={informatorLayout} options={{ headerShown: false }} />
                <Stack.Screen name="InformatorWireLayout" component={informatorWireLayout} options={{ headerShown: false }} />
                <Stack.Screen name="InformatorDesamorcageLayout" component={informatorDesamorcage} options={{ headerShown: false }} />
                <Stack.Screen name="InformatorKeypadLayout" component={informatorKeypad} options={{ headerShown: false }} />
                <Stack.Screen name="InformatorCompteurLayout" component={informatorCompteur} options={{ headerShown: false }} />
                <Stack.Screen name="InformatorSerialNumber" component={informatorSerialNumber} options={{ headerShown: false }} />
                <Stack.Screen name="InformatorWord" component={informatorWord} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

