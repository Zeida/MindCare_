import { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import {
  NextButtonComponent,
  OnBoardingItemComponent,
  PaginatorComponent
} from "../components/ComponentsIndex";
import onboardingslidesdata from "../data/OnBoardingSlidesData";

export default function OnBoardingScreen(props) {
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
      props.navigation.navigate("UseTerms");
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
