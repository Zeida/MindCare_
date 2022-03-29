import React from "react";
import { Image, View, StyleSheet, Pressable} from "react-native";

const EmotionalScaleComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={console.log("hello")}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion1.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={()=>{}}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion2.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={()=>{}}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion3.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={()=>{}}>
        <Image
          style={styles.tinyLogo}
          source={require("../images/emotions/emotion4.png")}
        />
      </Pressable>
      <Pressable style={styles.icon} onPress={()=>{}}>
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
