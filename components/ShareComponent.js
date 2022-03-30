import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Share, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const ShareComponent = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'MindCare | Descarga esta aplicacion y empieza a darle la importancia que se merece a la salud mental.',
            });

        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <TouchableRipple onPress={onShare}>
            <View style={styles.menuItem}>
                <MaterialCommunityIcons name="share" color={'black'} size={25} />
                <Text style={styles.menuItemText}>Quiero compartir</Text>
            </View>
        </TouchableRipple>
    );
};
const styles = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 30,
        marginBottom: 2,
    },
    menuItemText: {
        color: '#000000',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

export default ShareComponent;