import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="black" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="black"
          size={35}
        />
      </View>
      <Card
        title="coffee"
        subTitle=",mmm coffee"
        image={require("../assets/coffee-field.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
