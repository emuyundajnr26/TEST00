import { StyleSheet, Button, Text,TextInput,TouchableOpacity, View } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.main}>
      <Text style= {styles.Header}>
        <h1>LOGIN</h1>
      </Text>
      <Text style={styles.subTitle}>
        Login Into Your Account
      </Text>
      <View style={styles.fieldView}>
      <TextInput 
      style={ styles.inputField} 
      placeholder = "username/Email"/></View>
      <View style={styles.fieldView}>
        <TextInput style={ styles.inputField} placeholder= "Password" secureTextEntry/></View>
      <Button style = {styles.logButton}
        title="login"
       
      ></Button>
      <TouchableOpacity>
        <Text style = {styles.touchableText}>forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {},
subTitle: {},
fieldView: {
    width: "30%",
    height: "6%",
    backgroundColor: "#fff",
    margin: 5,
},
inputField: {
    borderWidth: 1,

    borderColor: "red",
    backgroundColor: "#fff",
    width: "100%",
    height:"100%",
    borderRadius: 10,
    textAlign:"center"
    
},
logButton: {},
touchableText: {},
});
