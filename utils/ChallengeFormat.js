export const challenge = {
  id: "",
  achievement: "",
  isCompleted: false,
  scope: "",
  title: "",
};

export function validateChallenge({ achievement="", isCompleted=false, scope="", challenge=""}) {
    if(scope == "" || challenge == "" ) return false;
    return true;
}
