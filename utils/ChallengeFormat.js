export const challenge = {
  id: "",
  achievement: "",
  isCompleted: false,
  scope: "",
  title: "",
  date: "",
};

export function validateChallenge({ achievement="", isCompleted=false, scope="", challenge="", date=""}) {
    if(scope == "" || challenge == "" ) return false;
    return true;
}
