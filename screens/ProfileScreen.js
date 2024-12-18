import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Avatar,
  Caption,
  Text,
  Title,
  TouchableRipple
} from "react-native-paper";
import { getAchievements, getCompletedChallenges, loggingOut } from "../api/FirebaseMethods";
import { ShareComponent } from "../components/ComponentsIndex";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export default function ProfileScreen(props) {
  const { user } = useContext(AuthenticatedUserContext);
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const handleSignOut = async () => {
    loggingOut();
  };

  useFocusEffect(
    useCallback(() => {
      setDisplayName(user.displayName);
      updateScreen();
    }, [])
  );

  const updateScreen = () => {
    getAchievements(setAchievements, setIsLoading, user);
    getCompletedChallenges(user, setCompletedChallenges, setIsLoading, setNumber);
  };

  useEffect(() => {
    updateScreen();
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View styles={styles.profile}>
        {user.email === null ? (
          <View style={styles.anonymousUserContainer}>
            <Text style={styles.anonymousUserText}>
              Has iniciado sesion de forma anónima.
            </Text>

            <Text style={styles.anonymousUserSubText}>
              <Ionicons
                style={styles.anonymousUserSubTextIcon}
                name="warning-outline"
                size={14}
                color="red"
              />
              Si cierras sesión perderás tus progresos.
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
                <Title style={styles.title}>{displayName}</Title>
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
            <Title>{number}</Title>
            <Caption>Retos completados</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>{achievements.length}</Title>
            <Caption>Insignias ganadas</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate("Mi lugar seguro");
            }}
          >
            <View style={styles.menuItem}>
              <FontAwesome
                name="life-saver"
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
              props.navigation.navigate("Mi caja de herramientas");
            }}
          >
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="treasure-chest"
                color={"black"}
                size={25}
              />
              <Text style={styles.menuItemText}>Mi caja de herramientas</Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => {
              props.navigation.navigate("Recursos");
            }}
          >
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="dropbox"
                color={"black"}
                size={25}
              />
              <Text style={styles.menuItemText}>Recursos de ayuda</Text>
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
            <TouchableRipple
              onPress={() =>
                Alert.alert(
                  "No disponible",
                  "Regístrese para acceder a esta funcionalidad."
                )
              }
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    paddingVertical: 10,
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
    color: "white",
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
    marginTop: 5,
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
});
