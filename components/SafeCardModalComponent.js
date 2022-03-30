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
            { id: Date.now(), title:{safeCardTitle}, body:{safeCardBody}, createdAt: Date.now() },
        ]);
        setSafeCardTitle("");
        setSafeCardBody("");
        setVisible(false);
    };

    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <View style={{alignSelf: "flex-end", marginRight:10}}>
                            <Text style={{fontSize:15}}>X</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>Para mi yo del futuro</Text>
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
                            style={[styles.textInput, { height: 60, marginTop:5 }]}
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
        borderRadius: 20
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 12,
        fontWeight:'bold'
    },
    inputGroup: { flexDirection: "row", marginVertical: 3 },
    textInput: {
        flex: 1,
        borderWidth: 1,
        padding:10,
        borderRadius:5,
        borderColor: "black",
        height: 28,
        paddingVertical: 1,
        paddingHorizontal: 10,
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
