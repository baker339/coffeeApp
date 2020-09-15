import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  StyleSheet,
  Platform,
  TextInput,
  Text,
  Switch,
  Button,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
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
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import colors from "./app/config/colors";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("CoffeeDetails", { id: 1 })}
    />
  );
};

const Coffee = ({ navigation }) => (
  <Screen>
    <Text>Coffee</Text>
    <Link />
  </Screen>
);

const CoffeeDetails = ({ route }) => (
  <Screen>
    <Text>Coffee Details {route.params.id}</Text>
  </Screen>
);

const Account = ({ route }) => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Coffee"
      component={ListingsScreen}
      options={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "white",
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="CoffeeDetails"
      component={ListingDetailsScreen}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={ListingsScreen}
      options={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "white",
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="AccountDetails"
      component={ListingDetailsScreen}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
      inactiveBackgroundColor: colors.secondary,
      inactiveTintColor: colors.white,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AddListing"
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="plus" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="dog" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

// View -> UIView
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
