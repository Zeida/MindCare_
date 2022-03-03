import * as React from 'react';
import { Text, View } from 'react-native';

export default function StatsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Inicio')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Stats Screen</Text>
        </View>
    );
}