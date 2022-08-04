import { StyleSheet,Button, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";


export default function Welcome ({navigation}){
    return(
        <ImageBackground source={require('../assets/images/keys.jpg')} style={styles.main}> 
        <TouchableOpacity onPress={()=> navigation.navigate("Signup")} style={styles.Button}>
            <Text>
            Visitor
            </Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("login")} style={styles.Button}>
            <Text>
                Employee
            </Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1, 
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
        resizeMode: 'center',
        Opacity: 0.9,
    },
    Button: {
        height: 40,
        width: "60%",
        backgroundColor: "green",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 100
    },
    
})