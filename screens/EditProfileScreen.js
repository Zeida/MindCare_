import { AntDesign, FontAwesome, Fontisto, Foundation, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfileScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground
                                source={{
                                    uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >

                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Username</Text>
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput
                        placeholder='Nombre y apellido'
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={[styles.textInput, { color: "#000000" }]} />
                </View>

                <View style={styles.action}>
                    <Foundation name="at-sign" size={20} />
                    <TextInput
                        placeholder='Nombre usuario'
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={[styles.textInput, { color: "#000000" }]} />
                </View>

                <View style={styles.action}>
                    <Ionicons name="location-outline" color={'black'} size={20} />
                    <TextInput
                        placeholder='Dirección'
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={[styles.textInput, { color: "#000000" }]} />
                </View>

                <View style={styles.action}>
                    <AntDesign name="phone" color={'black'} size={20} />
                    <TextInput
                        placeholder='Teléfono'
                        keyboardType='number-pad'
                        placeholderTextColor='#666666'
                        autoCorrect={false}
                        style={[styles.textInput, { color: "#000000" }]} />
                </View>

                <View style={styles.action}>
                    <Fontisto name="email" color={'black'} size={20} />
                    <TextInput
                        placeholder='Correo'
                        placeholderTextColor='#666666'
                        keyboardType='email-address'
                        autoCorrect={false}
                        style={[styles.textInput, { color: "#000000" }]} />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                    <Text style={styles.panelButtonTitle}>Actualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#192959',
        alignItems: 'center',
        marginTop: 10,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});