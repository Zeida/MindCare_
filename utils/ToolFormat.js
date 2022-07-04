export const tool = {
  tool: "",
};

export function validateTool({ tool = "" }) {
  if (tool == "") return false;
  return true;
}
