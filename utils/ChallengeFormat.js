export const challenge = {
  id: "",
  achievement: "",
  isCompleted: false,
  scope: "",
  title: "",
};

export function validateChallenge({id="", achievement="", isCompleted=false, scope="", title=""}) {
    if(scope == "" || title == "" ) return false;
    return true;
}
