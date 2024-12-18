import "firebase/firestore";
import { useContext } from "react";
import { auth, db } from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider ";

//USER ACCOUNT

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

// INITIAL DATA FOR USER

export async function setInitialChallenges(user) {
  const data = await db.collection("Challenges").get();
  data.forEach((doc) => {
    db.collection("Users")
      .doc(user.uid)
      .collection("Challenges")
      .add({
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
        ...doc.data(),
      });
  });
}

// SAFE CARDS

export async function createSafeCards({ title, body, user }) {
  db.collection("Users").doc(user.uid).collection("SafeCards").add({
    title: title,
    body: body,
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

export async function deleteSafeCard(item, user) {
  await db
    .collection("Users")
    .doc(user.uid)
    .collection("SafeCards")
    .doc(item.id)
    .delete();
  return this;
}

// TOOLS

export async function createTool(tool, user) {
  db.collection("Users").doc(user.uid).collection("Tools").add({
    tool: tool,
  });
}

export async function getTools(user, setTools, setIsLoading) {
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Tools")
    .get();
  const tools = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setTools(tools);
  setIsLoading(false);
}

export async function deleteTool(user, id) {
  const tool = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Tools")
    .doc(id)
    .delete();
}

// RESOURCES FOR HELP

export async function getResourcesForHelp(setResources, setIsLoading) {
  const data = await db.collection("ResourcesForHelp").get();
  const resources = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setResources(resources);
  setIsLoading(false);
}

// CHALLENGES

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

export async function completeChallenge(user, id, completed) {
  const completeChallenge = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .doc(id)
    .update({
      completed: completed,
      date: new Date().toISOString().substring(0, 10),
    });
  const challenge = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .doc(id)
    .get();
  const challengeData = challenge.data();
  if (challengeData.achievement != "") {
    const achievementName = await db
      .collection("Users")
      .doc(user.uid)
      .collection("Achievements")
      .where("name", "==", challengeData.achievement)
      .get();

    const achievementsName = achievementName.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const updateAchievement = await db
      .collection("Users")
      .doc(user.uid)
      .collection("Achievements")
      .doc(achievementsName[0].id)
      .update({
        won: completed,
      });
  }
}

export async function getCompletedChallenges(
  user,
  setCompletedChallenges,
  setIsLoading,
  setNumber
) {
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .where("completed", "==", true)
    .get();
  const challenges = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const stats = {
    emotional: 0,
    personal: 0,
    social: 0,
  };

  const color = {
    emotional: "#F2989A",
    personal: "#74C4AB",
    social: "#90D0CF",
  };

  let result = challenges.filter((item) => {
    return true;
  });

  result.forEach((challenge) => {
    let scope = challenge.scope;
    stats[scope] += 1;
  });

  const statsFormatter = [];

  Object.keys(stats).forEach((scope) => {
    statsFormatter.push({
      name: scope,
      minutes: stats[scope],
      color: color[scope],
      legendFontColor: "#000000",
      legendFontSize: 10,
    });
  });

  setNumber(challenges.length);
  setCompletedChallenges(statsFormatter);
  setIsLoading(false);
}

export async function getDayCompletedChallenges(
  user,
  setDayCompletedChallenges,
  setIsLoading,
  setNumber
) {
  const day = new Date().toISOString().substring(0, 10);
  const data = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .where("completed", "==", true)
    .where("date", "==", day)
    .get();
  const challenges = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const stats = {
    emotional: 0,
    personal: 0,
    social: 0,
  };

  const color = {
    emotional: "#F2989A",
    personal: "#74C4AB",
    social: "#90D0CF",
  };

  let result = challenges.filter((item) => {
    return true;
  });

  result.forEach((challenge) => {
    let scope = challenge.scope;
    stats[scope] += 1;
  });

  const statsFormatter = [];

  Object.keys(stats).forEach((scope) => {
    statsFormatter.push({
      name: scope,
      minutes: stats[scope],
      color: color[scope],
      legendFontColor: "#000000",
      legendFontSize: 10,
    });
  });
  setNumber(challenges.length);
  setDayCompletedChallenges(statsFormatter);
  setIsLoading(false);
}

export async function deleteChallenge(user, id) {
  const challenge = await db
    .collection("Users")
    .doc(user.uid)
    .collection("Challenges")
    .doc(id)
    .delete();
}

// FEELINGS

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

// ACHIEVEMENTS

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

export async function createChallengesSet(challengesSet) {
  const createSet = await challengesSet.forEach((challenge) => {
    db.collection("Challenges").add({
      challenge: challenge.challenge,
      title: challenge.title,
      description: challenge.description,
      achievement: challenge.achievement,
      completed: false,
      scope: challenge.scope,
    });
  });
}

export async function createAchievementsSet(achievementsSet) {
  const createSet = await achievementsSet.forEach((achievement) => {
    db.collection("Achievements").add({
      color: achievement.color,
      icon: achievement.icon,
      modalText: achievement.modalText,
      modalTitle: achievement.modalTitle,
      name: achievement.name,
      won: false,
    });
  });
}
