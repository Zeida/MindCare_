import * as React from "react";
import { SafeAreaView, StyleSheet, Text, Image} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import CardsForHelpData from "../data/CardsForHelpData";
import { SOFT_BLUE } from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function CardsForHelpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Recursos gratuitos de atención profesional
      </Text>
      <Image style={styles.image} source={require("../images/help.png")} />
      <ScrollView>
        {CardsForHelpData.map((card) => {
          return (
            <Card key={card.id} value={card.title} style={styles.item}>
              <Card.Content>
                <Title style={styles.title}>{card.title}</Title>
                <Paragraph style={styles.subtitle}>{card.subtitle}</Paragraph>
                <Title style={styles.number}>{card.number}</Title>
                <Paragraph style={styles.link}>{card.link}</Paragraph>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: SOFT_BLUE,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
  },
  number: {
    textAlign: "center",
    fontSize: 20,
    padding: 5,
  },
  link: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
});
