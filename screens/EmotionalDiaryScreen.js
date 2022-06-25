import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { getFeelings, storeFeeling } from "../api/FirebaseMethods";
import IconButtonComponent from "../components/IconButtonComponent";
import { ORANGE } from "../constants/Colors";
import FeelingIconData from "../data/FeelingIconData";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";
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
  const { user } = useContext(AuthenticatedUserContext);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [feelings, setFeelings] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeelings(user, setFeelings, setIsLoading);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <ActivityIndicator size="large" color={ORANGE} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoy me siento:</Text>
      <View style={styles.emotionalScaleContainer}>
        {FeelingIconData.map((feeling, index) => {
          return (
            <View key={index}>
              <IconButtonComponent
                name={feeling.icon}
                size={60}
                color={feeling.color}
                onPress={() => {
                  setDate(date);
                  storeFeeling(feeling.feeling, date, feeling.color, user);
                  getFeelings(user, setFeelings, setIsLoading);
                }}
              />
            </View>
          );
        })}
      </View>
      <Text style={styles.textdiary}>Mi diario emocional</Text>
      <View style={styles.pixelgraph}>
        <Calendar
          markingType={"multi-dot"}
          markedDates={feelings}
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
  textdiary: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 50,
  },
  emotionalScaleContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pixelgraph: {
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
});
