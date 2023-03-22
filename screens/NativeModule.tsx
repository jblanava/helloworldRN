import * as Device from "expo-device";
import { ToastAndroid, Button, Text, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function ButtonScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-slate-600 text-xl font-bold mt-2 mb-5`}>
        System Info
      </Text>
      <Text>Brand: {Device.brand}</Text>
      <Text>OS name: {Device.osName}</Text>
      <Text>OS version: {Device.osVersion}</Text>
      <Text>Is device: {Device.isDevice ? "true" : "false"}</Text>
    </View>
  );
}
