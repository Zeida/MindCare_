import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import onboardingslidesdata from "../data/OnBoardingSlidesData";
import OnBoardingItemComponent from "../components/OnBoardingItemComponent";
import PaginatorComponent from "../components/PaginatorComponent";
import NextButtonComponent from "../components/NextButtonComponent";
const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChange = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < onboardingslidesdata.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last item.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={onboardingslidesdata}
          renderItem={({ item }) => <OnBoardingItemComponent item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChange}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <PaginatorComponent data={onboardingslidesdata} scrollX={scrollX} />
      <NextButtonComponent
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / onboardingslidesdata.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardingScreen;
