import React from "react";
import { StyleSheet, Text, View } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default AppErrorMessage;
