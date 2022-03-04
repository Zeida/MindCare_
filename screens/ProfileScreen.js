import { AntDesign, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Caption, Text, Title, TouchableRipple } from 'react-native-paper';

const ProfileScreen = (props) => {
  return (
    <View styles={styles.profile}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 100 }}>
          <Avatar.Image source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' }} size={80} />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title}>Usuario prueba</Title>
            <Caption style={styles.caption}>@user</Caption>
          </View >
        </View>
      </View >
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="location-outline" color={'black'} size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> Moya, Las Palmas</Text>
        </View>
        <View style={styles.row}>
          <AntDesign name="phone" color={'black'} size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> +34 928 11 22 33</Text>
        </View>
        <View style={styles.row}>
          <Fontisto name="email" color={'black'} size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> Correo@email.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Insignias</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>16h</Title>
          <Caption>Dedicadas</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="treasure-chest" color={'black'} size={25} />
            <Text style={styles.menuItemText}>Mi lugar seguro</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {
          props.navigation.navigate('Ayuda');
        }}>
          <View style={styles.menuItem}>
            <Ionicons name="help-buoy-outline" color={'red'} size={25} />
            <Text style={styles.menuItemText}>Necesito ayuda</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {
          props.navigation.navigate('Mi perfil');
        }}>
          <View style={styles.menuItem}>
            <FontAwesome5 name="user-edit" color={'black'} size={25} />
            <Text style={styles.menuItemText}>Editar mi perfil</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="share" color={'black'} size={25} />
            <Text style={styles.menuItemText}>Quiero compartir</Text>
          </View>
        </TouchableRipple>
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
    marginTop: 15,
    marginBottom: 5
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
    borderRightColor: '#dddddd',
    borderRightWidth: 1
  },
  menuWrapper: {
    marginTop: 10,

  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
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