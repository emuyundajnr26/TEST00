import { StyleSheet, Button, Text, View } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.main}>
      <Text>WELCOME HOME</Text>
      <Button
        title="CLICK "
        onPress={() => navigation.navigate("welcome")}
      ></Button>
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
});
