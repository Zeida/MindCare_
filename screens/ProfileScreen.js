import {
  Fontisto, Ionicons, MaterialCommunityIcons
} from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Alert, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Avatar,
  Caption,
  Text,
  Title,
  TouchableRipple
} from "react-native-paper";
import { ShareComponent } from "../components/ComponentsIndex";
import app from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

const auth = app.auth();

const ProfileScreen = (props) => {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View styles={styles.profile}>
        {user.email === null ? (
          <View style={styles.anonymousUserContainer}>
            <Text style={styles.anonymousUserText}>
              Has iniciado sesion de forma anónima.
            </Text>

            <Text style={styles.anonymousUserSubText}>
              <Ionicons style={styles.anonymousUserSubTextIcon} name="warning-outline" size={14} color="red" />
              Si cierra sesión perderá sus progresos.
            </Text>
          </View>
        ) : (
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 50 }}>
              <Avatar.Image
                source={{
                  uri: "https://picsum.photos/700",
                }}
                size={80}
              />
              <View style={{ marginLeft: 30 }}>
                <Title style={styles.title}>{user.displayName}</Title>
                <View style={styles.row}>
                  <Fontisto name="email" color={"black"} size={20} />
                  <Text style={{ color: "#777777", marginLeft: 5 }}>
                    {" "}
                    {user.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Insignias</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>16</Title>
            <Caption>Retos completados</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => { props.navigation.navigate("Mi lugar seguro"); }}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="treasure-chest"
                color={"black"}
                size={25}
              />
              <Text style={styles.menuItemText}>Mi lugar seguro</Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate("Ayuda");
            }}
          >
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="alarm-light"
                color={"red"}
                size={25}
              />
              <Text style={styles.menuItemText}>Necesito ayuda</Text>
            </View>
          </TouchableRipple>
        </View>
        {user.email != null ? (
          <View style={styles.menuWrapper}>
            <TouchableRipple
              onPress={() => {
                props.navigation.navigate("Mi perfil");
              }}
            >
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="account-edit"
                  color={"black"}
                  size={25}
                />
                <Text style={styles.menuItemText}>Editar mi perfil</Text>
              </View>
            </TouchableRipple>
          </View>
        ) : (
          <View style={styles.menuWrapper}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Regístrate para acceder a esta funcionalidad.</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Vale!</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <TouchableRipple
              onPress={(() => setModalVisible(true))}
            >
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="account-edit"
                  color={"black"}
                  size={25}
                />
                <Text style={styles.menuItemText}>Editar mi perfil</Text>
              </View>
            </TouchableRipple>
          </View>
        )}
        <View style={styles.menuWrapper}>
          <ShareComponent />
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate("Sobre nosotros");
            }}
          >
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="lightbulb-on-outline"
                color={"black"}
                size={25}
              />
              <Text style={styles.menuItemText}>¿Quiénes somos?</Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={[styles.menuItem, styles.buttonLogOut]}
          >
            <Text style={styles.menuItemTextLogOut}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    paddingVertical:10,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 80,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#dddddd",
    borderRightWidth: 1,
  },
  menuWrapper: {
    marginTop: 5,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginBottom: 2,
  },
  menuItemText: {
    color: "#000000",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  menuItemTextLogOut: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
  },

  buttonLogOut: {
    fontSize: 16,
    color: "#FA2B25",
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "#FA3C35",
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  anonymousUserText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  anonymousUserContainer: {
    marginTop: 80,
    marginBottom: 20,
  },
  anonymousUserSubText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    padding: 10,
    marginLeft: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 40,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F27C38",
  },
  buttonClose: {
    backgroundColor: "#F27C38",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }


});
