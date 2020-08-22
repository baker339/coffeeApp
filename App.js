import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
  Dimensions,
  Hooks,
  ImagePropTypes,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// View -> UIView
export default function App() {
  //console.log("App executed");
  //console.log(useDimensions().screen);
  //const { landscape } = useDeviceOrientation();
  const x = 0;
  const buttonText = "Click Me!";

  return <WelcomeScreen />;
}

const containerStyle = { backgroundColor: "#fff" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

/* Old code from learning react native
<SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: landscape ? "75%" : "100%",
          height: "30%",
        }}
      ></View>
      <Text>{x}</Text>
      <Button
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => addOne() },
            { text: "No" },
          ])
        }
        title="This is an alert!"
      ></Button>
      <Button
        onPress={() => Alert.prompt("My prompt", "Prompt message!")}
        title="This is a prompt!"
      ></Button>
      <Text numberOfLines={1}>We're gonna make a coffee sharing app!</Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            height: 250,
            width: 250,
            uri:
              "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/09/flat-white.jpg",
          }}
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>

    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          //flexBasis: 100,
          //alignSelf: "flex-start",
          //flexWrap: "flex",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "relative",
          //flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          //flex: 1,
        }}
      />
    </View>
*/
