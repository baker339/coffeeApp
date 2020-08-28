import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import ListItem from "./ListItem";

import defaultStyles from "../config/styles";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[defaultStyles.text, styles.text]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    backgroundColor: defaultStyles.colors.light,
    marginBottom: 15,
    borderRadius: 20,
  },
});

export default PickerItem;
