import * as React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#BEDEFF' }}>
            <Text
                onPress={() => alert('This iS THE HOME SCREEN.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Home Screen</Text>
        </View>
    );
}