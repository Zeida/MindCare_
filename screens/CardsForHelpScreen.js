import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import CardsForHelpData from "../data/CardsForHelpData";


export default function CardsForHelpScreen() {

    return (
        <SafeAreaView style={styles.container}>
            {CardsForHelpData.map((card) => {
                return (
                    <Card key={card.id} value={card.title} style={styles.item}>
                        <Card.Content>
                            <Title style={styles.title}>{card.title}</Title>
                            <Paragraph style={styles.subtitle}>{card.subtitle}</Paragraph>
                            <Title style={styles.number}>{card.number}</Title>
                            <Paragraph style={styles.link}>{card.link}</Paragraph>
                        </Card.Content>
                    </Card>
                )
            }
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        padding: 10,
    },
    item: {
        backgroundColor: '#F27C38',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
    },
    number: {
        textAlign: 'center',
        fontSize: 30,
        padding: 20,
    },
    link: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'

    }

});