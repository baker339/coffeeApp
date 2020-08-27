import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";

import colors from "../config/colors";

function MainScroll(props) {
  return (
    <View style={styles.container}>
      <Card
        title="coffee"
        subTitle=",mmm coffee"
        image={require("../assets/coffee-field.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default MainScroll;
