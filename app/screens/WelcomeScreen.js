import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      //source={require("../assets/splash.png")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoTitle}>Caf</Text>
        <Image
          source={require("../assets/coffee-beans.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Coffee Together</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: "25%",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    top: 10,
  },
  logoTitle: {
    fontSize: 80,
    bottom: 30,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
});

export default WelcomeScreen;
