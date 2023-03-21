import { Button, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function ScrollingScreen({ navigation }) {
  const users = [
    "Juan",
    "Eva",
    "Pedro",
    "Anais",
    "Felipe",
    "Eustaquio",
    "Gladis",
    "Pepeluis",
    "Karim",
    "Fatima",
    "Hector",
    "Diana",
  ];

  return (
    <ScrollView>
      <View>
        {users.map((user) => (
          <Text
            key={user}
            style={tw`my-10 text-lg mx-auto font-semibold rounded-xl bg-red-200 p-2`}
          >
            Usuario con nombre: {user}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
