export const tool = {
  tool: "",
};

export function validateTool({ tool = "" }) {
  console.log(tool);
  if (tool == "") return false;
  return true;
}
