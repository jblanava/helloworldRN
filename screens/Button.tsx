import { ToastAndroid, Button, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function ButtonScreen({ navigation }) {
  const [pressed, setPressed] = useState<boolean>(false);

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text
        style={tw`text-${
          pressed ? "red" : "slate"
        }-400 text-xl font-bold mt-2 mb-5`}
      >
        Hello world
      </Text>
      <Button
        onPress={() => setPressed((prevState) => !prevState)}
        title="Click to change color"
      ></Button>
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
}
