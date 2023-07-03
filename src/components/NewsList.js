import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import data from "../news.json";
import NewsCard from "./NewsCard";

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  text: {
    color: "white"
  }
});

const NewsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Suis notre actualité : </Text>

      <FlatList
        data={data.news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <NewsCard {...item} />}
        // horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsList;
