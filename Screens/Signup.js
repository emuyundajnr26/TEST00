import { StyleSheet,Button, Text, View } from "react-native";
import React from "react";


export default function SignUp ({navigation}){
    return(
        <View style={styles.main}> 
        <Text>WELCOME HOME</Text>
        <Button
        title="CLICK TO START" onPress={ ()=> navigation.navigate("welcome")}></Button>
        </View>
    )

}
const styles = StyleSheet.create({
    main: {
        flex: 1, 
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    }
})