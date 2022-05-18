import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButtonComponent from "../components/IconButtonComponent";
import FeelingIconData from "../data/FeelingIconData";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import {
  DARK_BLUE,
  MIDDLE_BLUE,
  SOFT_GREEN,
  ORANGE,
  SOFT_PINK,
} from "../constants/Colors";

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul.",
    "Ago",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  today: "Hoy",
};

LocaleConfig.defaultLocale = "es";
export default function EmotionalDiaryScreen() {

  const [date, setDate] = useState(null);
  let today = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoy me siento:</Text>
      <View style={styles.emotionalScaleContainer}>
        {FeelingIconData.map((feeling, index) => {
          return (
            <View key={index}>
              <IconButtonComponent
                name={feeling.icon}
                size={50}
                color={feeling.color}
                onPress={() => {
                  let today = new Date().toISOString();
                  today.substring(0, 10);
                  setDate(today.substring(0, 10));
                  console.log(date);
                  console.log(feeling.value);
                }}
              />
            </View>
          );
        })}
      </View>
      <Text style={styles.text}>Mi diario emocional</Text>
      <View style={styles.pixelgraph}>
        <Calendar
          markingType={"multi-dot"}
          markedDates={{
          }}
          style={{
            height: 450,
            width: 350,
          }}
          theme={{
            textSectionTitleColor: "#b6c1cd",
            textSectionTitleDisabledColor: "#d9e1e8",
            todayTextColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
          }}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          firstDay={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 10,
  },
  emotionalScaleContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  icon: {
    padding: 10,
  },
  pixelgraph: {
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
});
