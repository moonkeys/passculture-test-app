import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import logo from "./logo-pass-culture.svg";
import NewsList from "./components/NewsList";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#282c34",
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  logo: {
    height: 100,
    margin: 12,
    width: "100%"
  },
  title: {
    fontSize: 16,
    color: "white",
    flex: 1
  },
  text: {
    color: "white",
    flex: 1
  }
});

function App() {
  return (
    <ScrollView contentContainerStyle={styles.header}>
      <Image
        accessibilityLabel="passCulture logo"
        source={{ uri: logo }}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Tu as entre 15 et 18 ans ?</Text>
      <NewsList />
    </ScrollView>
  );
}

export default App;
