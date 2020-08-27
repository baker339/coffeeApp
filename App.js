import { StatusBar } from "expo-status-bar";
import React from "react";
import ReactDOM from "react-dom";
import { StyleSheet, Platform } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MainScroll from "./app/screens/MainScroll";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

// View -> UIView
export default function App() {
  return <ListingsScreen />;
}
