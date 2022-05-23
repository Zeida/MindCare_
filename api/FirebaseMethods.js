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
    await setInitialChallenges(res.user);
    await setInitialAchievements(res.user);
    await setInitialStats(res.user);
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

export async function loginAnonymously() {
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

export async function getSafeCards(setSafeCards, setIsLoading, user) {
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("SafeCards")
    .get();
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

export async function deleteSafeCard(item, user) {
  await db
    .collection("Users")
    .doc(user.uid)
    .collection("SafeCards")
    .doc(item.id)
    .delete();
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

export async function setInitialChallenges(user) {
  const data = await db.collection("Challenges").get();
  data.forEach((doc) => {
    db.collection("Users")
      .doc(user.uid)
      .collection("Challenges")
      .add({
        id: doc.id,
        ...doc.data(),
      });
  });
}

export async function setInitialAchievements(user) {
  const data = await db.collection("Achievements").get();
  data.forEach((doc) => {
    db.collection("Users")
      .doc(user.uid)
      .collection("Achievements")
      .add({
        id: doc.id,
        ...doc.data(),
      });
  });
}

export async function setInitialStats(user) {
  const data = await db.collection("Stats").get();
  data.forEach((doc) => {
    db.collection("Users")
      .doc(user.uid)
      .collection("Stats")
      .add({
        id: doc.id,
        ...doc.data(),
      });
  });
}

export async function getChallenges(user, scope, setChallenges, setIsLoading) {
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .where("scope", "==", scope)
    .get();
  const challenges = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setChallenges(challenges);
  setIsLoading(false);
}

export async function storeFeeling(feeling, date, color, user) {
  db.collection("Users").doc(user.uid).collection("Feelings").doc(date).set({
    feeling: feeling,
    selectedColor: color,
    selected: true,
  });
}

export async function getFeelings(user, setFeelings, setIsLoading) {
  let feelingsCalendar = {};
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Feelings")
    .get();
  data.docs.forEach((feelingDate) => {
    feelingsCalendar[feelingDate.id] = {
      ...feelingDate.data(),
    };
  });
  setFeelings(feelingsCalendar);
  setIsLoading(false);
}
//OK
export async function createChallenge(
  challenge,
  title,
  description,
  scope,
  user
) {
  db.collection("Users").doc(user.uid).collection("Challenges").add({
    challenge: challenge,
    title: title,
    description: description,
    achievement: "",
    completed: false,
    scope: scope,
  });
}

//error
export async function completeChallenge(challenge, user) {
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .where("challenge", "==", challenge)
    .get();
  console.log(data);
}

export async function getAchievements(setAchievements, setIsLoading, user) {
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Achievements")
    .where("won", "==", true)
    .get();
  const achievements = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setAchievements(achievements);
  setIsLoading(false);
}

export async function deleteChallenge(user, id) {
  await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .doc(id)
    .delete();

  return this;
}