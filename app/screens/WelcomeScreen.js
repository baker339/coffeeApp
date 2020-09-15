import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Animated,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
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
      <View style={styles.buttonContiner}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
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
  buttonContiner: {
    padding: 20,
    width: "100%",
  },
  buttonText: {
    fontSize: 30,
    top: "30%",
    textAlign: "center",
    color: "white",
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
    padding: 20,
  },
  logoTitle: {
    fontSize: 80,
    bottom: 30,
  },
});

export default WelcomeScreen;
