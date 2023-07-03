import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import image1 from "../images/cannes1.jpg";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
    // width: 200
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  category: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 4
  },
  date: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 4
  },
  text: {
    fontSize: 14,
    marginBottom: 12
  },
  image: {
    // width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 12
  }
});

const NewsCard = (props) => {
  const { title, category, date, text, images } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.text}>{text}</Text>
      {images?.map((image, index) => {
        return (
          <>
            <Image
              key={index.toString()}
              style={styles.image}
              source={image1}
            />
          </>
        );
      })}
    </View>
  );
};

export default NewsCard;
