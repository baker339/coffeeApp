import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        <View style={styles.detailContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 100,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
