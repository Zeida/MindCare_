import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Text, View } from "react-native";

export default function ToolBoxScreen(props) {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Try editing me! 🎉</Text>
      </View>
    </SafeAreaView>
  );
}
