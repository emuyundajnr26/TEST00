import { StyleSheet, Button, Text,TextInput,TouchableOpacity, View, ImageBackground} from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <ImageBackground source={require('../assets/images/keys.jpg')} style={styles.main}>
      <Text style= {styles.HeaderText}>
      LOGIN
      </Text>
      <Text style={styles.subTitle}>
        Login Into Your Account
      </Text>
      <View style={styles.fieldView}>
      <TextInput 
      style={ styles.inputField1} 
      placeholder = "username/Email"/>
      </View>
      <View style={styles.fieldView}>
        <TextInput style={ styles.inputField2} placeholder= "Password" secureTextEntry/></View>
      <Button style = {styles.logButton}
        title="login">     
        </Button>
      <TouchableOpacity>
        <Text style = {styles.touchableText}>forgot password?</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: 'center',
    opacity: 0.9,
  },
  HeaderText: {
    fontWeight: 'bold',
    marginBottom: 50,
    fontsize: 95,
    letterSpacing: 2,
  },
subTitle: {
  fontsize: 25,
  marginBottom: 20,
},
fieldView: {
    width: "30%",
    height: "6%",
    backgroundColor: "#fff",
    margin: 10,
},
inputField1: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    width: "100%",
    height:"100%",
    borderRadius: 10,
    textAlign:"center",
    padding: 20,
    
},
inputField2: {
  borderWidth: 1,
  borderColor: "black",
  backgroundColor: "#fff",
  width: "100%",
  height:"100%",
  borderRadius: 10,
  textAlign:"center",
  padding: 20,
},

logButton: {
backgroundColor: 'green',
},
touchableText: {
  color: 'green',
  marginTop: 30,
},

});
