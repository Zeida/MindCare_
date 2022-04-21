import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
  View,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { SOFT_BLUE } from "../constants/Colors";
import { getResourcesForHelp } from "../api/FirebaseMethods";
import { ORANGE } from "../constants/Colors";
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
      <Image style={styles.image} source={require("../images/helptips.png")} />
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
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
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 30,
    marginRight: 30,
  },
});
