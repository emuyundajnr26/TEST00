import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [number, setNumber] = useState(0);
  function counting() {
    setNumber(number + 1);
  }
  function countingdown(){
setNumber(number - 1)
  }
  return (
    <View style={styles.container}>
      <Text> <h1> IMUKS INTERNSHIP APP2</h1></Text>
      <Text><h1>COUNT ={number}</h1></Text>
      <Button title="COUNT" onPress={()=> counting()}></Button>
      <Button title ="COUNTDOWN" onPress={()=> countingdown()}></Button>
      <StatusBar style="auto" />
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
