import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const EmotionalScaleComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={console.log("hey")}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion1.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={console.log("hey")}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion2.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={console.log("shey")}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion3.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={console.log("hey")}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion4.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={console.log("heyd")}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  icon: {
    padding: 5,
  },
});
export default EmotionalScaleComponent;