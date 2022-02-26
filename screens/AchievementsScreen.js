import * as React from 'react';
import { Text, View } from 'react-native';

export default function AchievementsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('homeScreenName')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Achievements Screen</Text>
        </View>
    );
}