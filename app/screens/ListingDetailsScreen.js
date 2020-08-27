import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.listingContainer}>
      <Image
        source={require("../assets/coffee-field.png")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>This is a title</Text>
        <Text style={styles.subtitle}>This is a subtitle</Text>
      </View>
      <ListItem
        image={require("../assets/coffee-field.png")}
        title="Aidan Baker"
        subTitle="5 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  listingContainer: {
    paddingTop: 0,
    padding: 0,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
