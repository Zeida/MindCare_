import * as React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
      <View styles={styles.profile}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 100 }}>
            <Avatar.Image source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', }} size={80} />
            <View style={{ marginLeft: 20 }}>
              <Title style={styles.title, { marginTop: 15, marginBottom: 5, }}>Usuario prueba</Title>
              <Caption style={styles.caption}>@user</Caption>
            </View >
          </View>
        </View >
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Ionicons name="location-outline" color={'white'} size={20} />
            <Text style={{color:"#777777", marginLeft:20}}> Moya, Las Palmas</Text>
          </View>
        </View>
      </View>
  )
}


export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BEDEFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#BEDEFF'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});