import * as React from 'react';
import { Text, View } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This iS THE Profile SCREEN.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Profile Screen</Text>
        </View>
    );
}