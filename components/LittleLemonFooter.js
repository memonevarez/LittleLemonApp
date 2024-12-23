import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={{ backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          color: "black",
          marginBottom: 20,
        }}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}
