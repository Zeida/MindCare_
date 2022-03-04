import React, { useState } from 'react';
import { Alert, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Challenge from '../components/Challenge';
export default function ToDoListScreen() {

    const [list, setList] = useState([])
    const [value, setValue] = useState("")

    function addText(text) {
        if (value !== "") {
            setList(prev => {
                return [
                    ...prev,
                    { text: text, isSelected: false }
                ]
            })
            setValue("")
        } else {
            Alert.alert("Upss!","No has escrito nada")
        }
    }

    function setIsSelected(index, value) {
        let data = []

        for (let i = 0; i < list.length; i++) {
            if (index === i) {
                data.push({ ...list[i], isSelected: value })
            } else {
                data.push(list[i])
            }
        }

        setList(data)
    }

    function deleteItem(idx) {
        Alert.alert(
            "Posponer objetivo",
            "¿Quieres descartarlo e intentarlo en otro momento?",
            [
                {
                    text: "Mantener",
                },
                {
                    text: "Si", onPress: () => {
                        const data = list.filter((item, index) => index !== idx)
                        setList(data)
                    }
                }
            ])
    }


    return <View style={styles.container}>
        <Text style={ styles.text }>Mis objetivos:</Text>
        <FlatList style={{ flex: 1 }}
            data={list}
            renderItem={({ item, index }) => <Challenge data={item} index={index} setIsSelected={setIsSelected} deleteItem={deleteItem} />}
            keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.textBoxWrapper}>
            <TextInput
                style={styles.textInput}
                placeholder="Añadir nuevo objetivo"
                placeholderTextColor={"#003131"}
                onChangeText={text => setValue(text)}
                value={value} />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => addText(value)}>
                <Text style={{ fontSize: 35, color: "#E9E9E9" }}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: '#fff',
        padding: 19
    },
    textBoxWrapper: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 19
    },
    textInput: {
        elevation: 5,
        shadowColor: "#E9E9E9",
        shadowOffset: { width: 2, height: 12 },
        shadowRadius: 12,
        borderRadius: 25,
        backgroundColor: "#E9E9E9",
        height: 42,
        paddingLeft: 15,
        width: "90%",
        color: "#003131",
        marginRight: 15,
        fontSize: 15
    },
    btn: {
        elevation: 7,
        shadowColor: "#192959",
        shadowOffset: { width: 2, height: 12 },
        shadowRadius: 10,
        backgroundColor: '#192959',
        height: 42,
        width: 42,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 22,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginBottom: 10,
    }
})