import {Dimensions, StyleSheet} from "react-native";

export const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(51,51,51,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title :{
        color : '#ffffff',
        fontSize : 50,
        textAlign : "center",
        textAlignVertical : "center",
        // flex : 5,
    },
    text: {
        color : '#ffffff'
    },
    pressedHome: {
        backgroundColor:'rgba(83,167,251,0.98)',
        alignItems : "center",
        alignContent : "center",
        textAlign : "center",
        textAlignVertical:"center",

        padding : height/20,
        marginTop : height / 7,
        width : width,
    },
    pressed: {
        backgroundColor:'rgba(83,167,251,0.98)',
        alignItems : "center",
        textAlign : "center",
        justifyContent : "center",
        padding : 10,
        margin : 2,
    },
    pressedText : {
        color : '#ffffff',
        fontSize : 30,
    },

    pressedMenu: {
        backgroundColor:'rgba(83,167,251,0.98)',
        alignItems : "center",
        textAlign : "center",
        justifyContent : "center",
        padding : 5,
        margin : 2,
    },

    pressedTextMenu:{
        color: '#AAAAAA',
        fontSize : 15,
    },

    // Partie Modules
    moduleView:{
        width : width / 2 - 10,
        height : height / 2 - 5,
        backgroundColor : "#343232",
        flex : 1,
        margin: 2
    },

    roundButton: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(255,0,0,1)',
    },

    rondButtonText : {
        color : '#ffffff',
        fontSize : 25,
        fontWeight : "bold",
    }
});
