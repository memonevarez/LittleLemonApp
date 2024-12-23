import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "#F4CE14" }}>
      <Text style={{ flex: 0.14, padding: 50, fontSize: 25, color: "black" }}>
        Welcome to
        <Text style={{ fontWeight: "bold" }}> Little Lemon </Text>
      </Text>
    </View>
  );
}
