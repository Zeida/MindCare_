import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  useShadowColorFromDataset: false, 
};

const PieChartComponent = ({data}) => {
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={255}
      chartConfig={chartConfig}
      accessor={"minutes"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 10]}
      absolute
    />
  );
};


export default PieChartComponent;
