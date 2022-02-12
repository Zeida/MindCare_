import * as React from 'react';
import { Text, View } from 'react-native';
import ChallengeList from './ChallengesListScreen';
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#BEDEFF' }}>
                <ChallengeList/>
        </View>
    );
}