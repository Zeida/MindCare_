import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet, Text, View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Paragraph, Title } from "react-native-paper";
import { getResourcesForHelp } from "../api/FirebaseMethods";
import { ORANGE, SOFT_BLUE } from "../constants/Colors";
export default function ResourcesForHelpScreen() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getResourcesForHelp(setResources, setIsLoading);
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Recursos recomendados</Text>
      <Image style={styles.image} source={require("../images/resourcesforhelp.png")} />
      <ScrollView>
      {resources.map((resource) => {
        return (
          <Card key={resource.id} value={resource.title} style={styles.item}>
            <Card.Content>
              <Title style={styles.title}>{resource.title}</Title>
              <Paragraph style={styles.subtitle}>{resource.subtitle}</Paragraph>
              <Paragraph style={styles.link}>{resource.link}</Paragraph>
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
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
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
    color: "black",
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
