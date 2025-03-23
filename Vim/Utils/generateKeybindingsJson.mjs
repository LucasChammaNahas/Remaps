export function generateKeybindingsJson(keybindings) {
   const keybindingsJson = JSON.stringify(keybindings, null, 2);

   const updatedKeybindingsJson = keybindingsJson.replace(/\\"/g, "'");

   return updatedKeybindingsJson;
}
