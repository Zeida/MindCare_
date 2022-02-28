import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import Checkbox from 'expo-checkbox';

export default function Challenge(props) {
    return (<Pressable style={styles.view} onLongPress={() => props.deleteItem(props.index)}>
        <Checkbox style={styles.checkbox}
            value={props.data.isSelected}
            onValueChange={(value) => props.setIsSelected(props.index, value)}
        />
        <Text style={{...styles.text, textDecorationLine: props.data.isSelected ? "line-through" : "none"}}>{props.data.text}</Text>
    </Pressable>);
}

const styles = StyleSheet.create({
    view: {
        elevation: 5,
        shadowColor: "#E9E9E9",
        shadowOffset: { width: 2, height: 12 },
        shadowRadius: 12,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 19,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#E9E9E9",
        marginBottom: 15
    },
    text: {
        fontSize: 15,
        color: "#003131"
    },
    checkbox: {
        height: 26,
        width: 26,
        borderRadius: 5,
        backgroundColor: '#192959',
        marginRight: 15


    }
})