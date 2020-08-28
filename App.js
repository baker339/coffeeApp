import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StyleSheet, Platform, TextInput, Text, Switch } from "react-native";
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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Coffee Beans", value: 1 },
  { label: "Coffee Shop", value: 1 },
  { label: "Drink Type", value: 1 },
];

// View -> UIView
export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories}
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
