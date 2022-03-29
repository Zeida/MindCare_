import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import {
  DARK_BLUE, MIDDLE_BLUE, ORANGE, SOFT_GREEN, SOFT_GREY, SOFT_PINK
} from "../constants/Colors";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  color: (opacity) => {
    switch (Number(opacity.toFixed(2))) {
      case 0.15:
        return SOFT_GREY;
      case 0.2:
        return DARK_BLUE;
      case 0.4:
        return MIDDLE_BLUE;
      case 0.6:
        return ORANGE;
      case 0.8:
        return SOFT_PINK;
      case 1:
        return SOFT_GREEN;
      default:
        return "#ff0000";
    }
  },
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  style: {
    borderRadius: 10,
  }
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
          endDate={new Date("2022-12-31")}
          numDays={200}
          width={screenWidth}
          height={500}
          chartConfig={chartConfig}
          horizontal={false}
          showOutOfRangeDays={true}
          gutterSize={0.5}
          squareSize={10}
          showMonthLabels={false}
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
