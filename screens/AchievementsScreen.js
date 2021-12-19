import * as React from 'react';
import { Text, View } from 'react-native';

export default function AchievementsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#BEDEFF' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Achievements Screen</Text>
        </View>
    );
}