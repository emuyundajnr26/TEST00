import { StyleSheet,Button, Text, View, TouchableOpacity } from "react-native";
import React from "react";


export default function welcome ({navigation}){
    return(
        <View style={styles.main}> 
        <TouchableOpacity onPress={()=> navigation.navigate("Signup")} style={styles.cusButton}>
            <Text>
Visitor
            </Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={()=> navigation.navigate("login")} style={styles.cusButton}>
            <Text>
                Employee
            </Text>
        </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1, 
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
    cusButton: {
        height: 40,
        width: "40%",
        backgroundColor: "green",
        textAlign: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 100

    },
    
})