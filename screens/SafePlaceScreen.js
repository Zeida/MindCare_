import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function SafePlaceScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mi lugar seguro</Text>
            <Image
                style={styles.image}
                source={require("../images/safeplace.png")}
            />
            <Text style={styles.subtext}>Mis recordatorios:</Text>
            <ScrollView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 10,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "center",
    },
    subtext: {
        fontSize: 15,
        lineHeight: 30,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        margin: 5,
        marginLeft: 20,
        textAlign: "left",
    },
    image: {
        width: 300,
        height: 250,
        marginLeft: 30,
        marginRight: 30,
    },
});
