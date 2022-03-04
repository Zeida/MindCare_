import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
const CARDSFORHELP = [
    {
        id:1,
        title: 'Teléfono de la esperanza',
        subtitle: 'Si necesitas contar, cuenta con nosotros',
        number: '717 003 717',
        link: 'https://telefonodelaesperanza.org/'
    },
    {
        id:2,
        title: 'Psicólogos y psicólogas sin fronteras',
        subtitle: 'Nuestro lado más humano',
        number: '960 450 230',
        link: 'https://www.psicologossinfronteras.org/'
    },
];

export default function CardsForHelpScreen() {

    return (
        <SafeAreaView style={styles.container}>
            {CARDSFORHELP.map((card) => {
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
        marginTop: 10
    },
    item: {
        backgroundColor: '#BEDEFF',
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