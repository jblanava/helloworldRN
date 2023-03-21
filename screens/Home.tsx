import { Button, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function HomeScreen({ navigation }) {
  return (
    <View style={tw`flex-1 gap-5 items-center justify-center bg-white`}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Button section"
        onPress={() => navigation.navigate("Button")}
      />
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate("Modal")}
      />
      <Button
        title="Go to Scrolling"
        onPress={() => navigation.navigate("Scrolling")}
      />
    </View>
  );
}
