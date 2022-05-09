import "firebase/firestore";
import { useContext } from "react";
import { auth, db } from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

export async function registration(
  email,
  password,
  displayName,
  setSignupError
) {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const update = {
      displayName: displayName,
    };
    await res.user.updateProfile(update);
    await db.collection("Users").doc(res.user.uid).set({
      creationDate: Date.now(),
      displayName: displayName,
      email: res.user.email,
      uid: res.user.uid,
    });
  } catch (error) {
    switch (error.code) {
      case "auth/weak-password":
        return setSignupError("La contraseña no es muy segura.");
      case "auth/invalid-email":
        return setSignupError("Este correo no es válido.");
      case "auth/email-already-in-use":
        return setSignupError("Ya existe una cuenta con este correo.");
      default:
        return setSignupError(error.message);
    }
  }
}

export async function login(email, password, setLoginError) {
  if (email == "" && password == "") return;
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/user-not-found":
        return setLoginError("No existe un usuario con este correo.");
      case "auth/wrong-password":
        return setLoginError("La contraseña es incorrecta.");
      case "auth/invalid-email":
        return setLoginError("Este correo no es válido.");
      default:
        return setLoginError(error.message);
    }
  }
}

export async function loggingOut() {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
}

export async function updateProfile(displayName, setUpdateError) {
  const { user } = useContext(AuthenticatedUserContext);
  const update = {
    displayName: displayName,
  };
  try {
    return await user.updateProfile(update);
  } catch (error) {
    console.log(error);
    setUpdateError(error.message);
  }
}

export async function loginAnonymously(displayName, setUpdateError) {
  auth
    .signInAnonymously()
    .then(() => {
      console.log("User signed in anonymously");
    })
    .catch((error) => {
      if (error.code === "auth/operation-not-allowed") {
        console.log("Enable anonymous in your firebase console.");
      }
      console.error(error);
    });
}

//collection de prueba hay que cambiarlo
export async function getSafeCards(setSafeCards, setIsLoading, user) {
  const data = await db.collection("Users").doc(user.uid).collection("SafeCards").get();
  const achievements = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setSafeCards(achievements);
  setIsLoading(false);
}

export async function createSafeCards({ title, body, user }) {
  db.collection("Users").doc(user.uid).collection("SafeCards").add({
    title: title,
    body: body,
  });
}

export async function deleteSafeCard({item, user}) {
  await db.collection("Users").doc(user.uid).collection("SafeCards").doc(item.id).delete();
  return this;
}

export async function getResourcesForHelp(setResources, setIsLoading) {
  const data = await db.collection("ResourcesForHelp").get();
  const resources = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setResources(resources);
  setIsLoading(false);
}
