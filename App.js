import React from "react";
import { Text, Button } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Screen from "./app/components/Screen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import colors from "./app/config/colors";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import Firebase from "./app/api/firebase";

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
