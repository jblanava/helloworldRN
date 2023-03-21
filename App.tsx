import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/Details";
import HomeScreen from "./screens/Home";
import ButtonScreen from "./screens/Button";
import ModalScreen from "./screens/Modal";
import ScrollingScreen from "./screens/Scrolling";

export default function App() {
  const [pressed, setPressed] = useState<boolean>(false);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Scrolling" component={ScrollingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
