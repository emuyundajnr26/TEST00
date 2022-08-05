import { StyleSheet, Button, Text,TextInput,TouchableOpacity, View, ImageBackground,} from "react-native";
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
        <TextInput style={ styles.inputField2} placeholder= "Password" secureTextEntry/>
        </View>
        <TouchableOpacity style={styles.logButton} >
      <Text>
        Login
        </Text>     
        </TouchableOpacity>
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
    color: 'green',
  },
subTitle: {
  fontsize: 28,
  marginBottom: 20,
  color: 'green',
},
fieldView: {
    width: "30%",
    height: "6%",
    backgroundColor: "#fff",
    margin: 25,
},
inputField1: {
    borderWidth: 2,
    borderColor: '#e8e8e8',
    backgroundColor: "#fff",
    width: "100%",
    height:"100%",
    borderRadius: 5,
    textAlign:"center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
},
inputField2: {
  borderWidth: 2,
  borderColor: '#e8e8e8',
  backgroundColor: "#fff",
  width: "100%",
  height:"100%",
  borderRadius: 5,
  textAlign:"center",
  paddingTop: 5,
  paddingBottom: 5,
  paddingHorizontal: 5,
},

logButton: {
  height: 40,
  width: "30%",
  backgroundColor: "green",
  textAlign: "center",
  justifyContent: "center",
  marginBottom: 20,
  marginTop: 30,
  borderRadius: 100,
  marginTop: 35,
},
touchableText: {
  color: 'green',
  marginTop: 30,
},

});
