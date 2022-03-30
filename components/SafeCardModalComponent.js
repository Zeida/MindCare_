import React from "react";
import {
    Modal, StyleSheet, Text,
    TextInput, TouchableOpacity, View
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { ORANGE, SOFT_GREEN } from "../constants/Colors";
export default function SafeCardModalComponent({ visible, setVisible, setSafeCards }) {
    const [safeCardTitle, setSafeCardTitle] = React.useState("");
    const [safeCardBody, setSafeCardBody] = React.useState("");

    const createSafeCard = () => {
        setSafeCards((safeCards) => [
            ...safeCards,
            { id: Date.now(), safeCardTitle, safeCardBody, createdAt: Date.now() },
        ]);
        setSafeCardTitle("");
        setSafeCardBody("");
        setVisible(false);
    };

    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Nuevo recordatorio</Text>
                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder="Título"
                            style={styles.textInput}
                            value={safeCardTitle}
                            onChangeText={(text) => setSafeCardTitle(text)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder="Recordatorio"
                            style={[styles.textInput, { height: 35 }]}
                            value={safeCardBody}
                            onChangeText={(text) => setSafeCardBody(text)}
                            multiline={true}
                        />
                    </View >
                    <View style={styles.buttonContainer}>


                        <ButtonComponent
                            onPress={() => createSafeCard()}
                            title={"Añadir"}
                            backgroundColor={SOFT_GREEN}
                            titleColor={"#fff"}
                            titleSize={15}
                            width={100}
                            containerStyle={{
                                alignSelf: "flex-end",
                                borderWidth: 1,
                                borderColor: "gray",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                marginTop: 15,
                                borderRadius: 40,
                                margin: 5
                            }} />
                        <ButtonComponent
                            onPress={() => setVisible(false)}
                            title={"Cancelar"}
                            backgroundColor={'red'}
                            titleColor={"#fff"}
                            titleSize={15}
                            width={110}
                            containerStyle={{
                                alignSelf: "flex-end",
                                borderWidth: 1,
                                borderColor: "gray",
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                marginTop: 15,
                                borderRadius: 40,
                                margin: 5
                            }} />
                    </View>
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "rgba(0,0,0,0.8)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    modalContent: {
        backgroundColor: "#fff",
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 40
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 12,
    },
    inputGroup: { flexDirection: "row", marginVertical: 10 },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#b7b7b7",
        height: 24,
        paddingVertical: 4,
        paddingHorizontal: 5,
    },
    createButton: {
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: 15,
        borderRadius: 40,
        margin: 5
    },
    buttonContainer: {
        flexDirection: 'row-reverse'
    }
});
