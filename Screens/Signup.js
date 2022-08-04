import { StyleSheet,Button, Text, View,TouchableOpacity, Image, ImageBackground } from "react-native";
import React from "react";


export default function SignUp ({navigation}){
    return(
         <ImageBackground source={require('../assets/images/keys.jpg')} style={styles.main}> 
                <Image source={require('../assets/images/imuk.jpg')} style={styles.headerImage} />
        <Text style={styles.headerText}>WELCOME TO WEL-SAFE</Text>
        <TouchableOpacity>
        <Button
        title="CLICK TO START" onPress={() => navigation.navigate("Welcome")} style={styles.Button} />
        </TouchableOpacity>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    main: {
        flex: 1, 
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.9,
    },

    Button: {
        backgroundColor: 'green',
    },
    headerText: {
        fontSize: 35,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 75,
        letterSpacing: 1.2,
    },

    headerImage: {
        width: 60,
        height: 60,
        resizeMode: 'center',
        opacity: 0.5,
        flexDirection: 'row',
        backgroundColor: 'grey',
    },
})