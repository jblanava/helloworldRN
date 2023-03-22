import { Image, Pressable, ScrollView, Text, View } from "react-native";
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
          <View
            key={user}
            style={tw`flex-row my-10 rounded-xl mx-auto bg-red-200 p-2`}
          >
            <Text style={tw`text-lg  font-semibold `}>Usuario: {user}</Text>
            <Pressable onPress={() => console.log("pressed " + user)}>
              <Image
                style={tw`ml-3 my-auto h-6 w-6`}
                source={require("../assets/email.png")}
              ></Image>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
