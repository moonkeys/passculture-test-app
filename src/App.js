import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "./logo-pass-culture.svg";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  logo: {
    height: "10vh",
    width: "100vw"
  },
  title: {
    fontSize: "calc(10px + 1vh)",
    color: "white",
    flex: 1
  }
});

function App() {
  return (
    <View style={styles.header}>
      <Image
        accessibilityLabel="passCulture logo"
        source={{ uri: logo }}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Tu as entre 15 et 18 ans ?</Text>
    </View>
  );
}

export default App;
