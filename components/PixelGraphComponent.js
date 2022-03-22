import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#192959",
  backgroundGradientTo: "#192959",
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const commitsData = [
  { date: "2022-01-02", count: 1 },
  { date: "2022-01-03", count: 2 },
  { date: "2022-01-04", count: 3 },
  { date: "2022-01-05", count: 4 },
  { date: "2022-01-06", count: 5 },
  { date: "2022-01-30", count: 2 },
  { date: "2022-01-31", count: 3 },
  { date: "2022-03-01", count: 2 },
  { date: "2022-04-02", count: 4 },
  { date: "2022-03-05", count: 2 },
  { date: "2022-02-30", count: 4 },
];

const PixelGraphComponent = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ContributionGraph
          values={commitsData}
          endDate={new Date("2022-12-31")}
          numDays={365}
          width={300}
          height={1150}
          chartConfig={chartConfig}
          horizontal={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 1000,
    width: 300,
  },
});

export default PixelGraphComponent;
