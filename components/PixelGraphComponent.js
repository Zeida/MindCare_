import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import {
  DARK_BLUE, ORANGE, SOFT_BLUE, SOFT_GREEN, SOFT_GREY, SOFT_PINK
} from "../constants/Colors";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  color: (opacity) => {
    switch (Number(opacity.toFixed(2))) {
      case 0.15:
        return SOFT_GREY;
      case 0.2:
        return ORANGE;
      case 0.4:
        return SOFT_GREEN;
      case 0.6:
        return SOFT_PINK;
      case 0.8:
        return DARK_BLUE;
      case 1:
        return SOFT_BLUE;
      default:
        return "#ff0000";
    }
  },
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
};

const commitsData = [
  { date: "2022-01-01", count: 1 },
  { date: "2022-01-02", count: 2 },
  { date: "2022-01-03", count: 3 },
  { date: "2022-01-04", count: 4 },
  { date: "2022-01-05", count: 5 },
  { date: "2022-01-06", count: 1 },
  { date: "2022-01-07", count: 1 },
  { date: "2022-01-08", count: 2 },
  { date: "2022-01-09", count: 3 },
  { date: "2022-01-10", count: 4 },
];

const PixelGraphComponent = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContributionGraph
          values={commitsData}
          endDate={new Date("2022-01-31")}
          numDays={31}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          horizontal={false}
          showOutOfRangeDays={true}
          gutterSize={1}
          squareSize={25}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop:10,
  },
});

export default PixelGraphComponent;
