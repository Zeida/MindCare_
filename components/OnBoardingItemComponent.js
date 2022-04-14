import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const OnBoardingItemComponent = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.4 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    marginTop: 40,
    alignSelf: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    paddingHorizontal: 64,
    textAlign: "center",
  },
});

export default OnBoardingItemComponent;
