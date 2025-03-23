import fs from 'fs';
import { config } from './Config/config.mjs';
import { assembleKeymapBlueprint } from './Utils/assembleKeymapBlueprint.mjs';
import { generateVimKeymap } from './Utils/generateVimKeymap.mjs';
import { generateVscodeKeymap } from './Utils/generateVscodeKeymap.mjs';
import { generateSettingsJson } from './Utils/generateSettingsJson.mjs';
import { generateKeybindingsJson } from './Utils/generateKeybindingsJson.mjs';
// import { generateNeovimKeymap } from './Utils/generateNeovimKeymap.mjs';

const keymapBlueprint = assembleKeymapBlueprint(config);
const vimKeymap = generateVimKeymap(keymapBlueprint);
const vscodeKeymapMac = generateVscodeKeymap(keymapBlueprint, 'mac');
const vscodeKeymapWin = generateVscodeKeymap(keymapBlueprint, 'win');
// const neovimKeymap = generateNeovimKeymap(keymapBlueprint);

const settingsJsonMac = generateSettingsJson(vimKeymap, 'mac');
const settingsJsonWin = generateSettingsJson(vimKeymap, 'win');

const keybindingsJsonMac = generateKeybindingsJson(vscodeKeymapMac);
const keybindingsJsonWin = generateKeybindingsJson(vscodeKeymapWin);

fs.writeFileSync('./Build/mac.settings.json', settingsJsonMac);
fs.writeFileSync('./Build/mac.keybindings.json', keybindingsJsonMac);

fs.writeFileSync('./Build/win.settings.json', settingsJsonWin);
fs.writeFileSync('./Build/win.keybindings.json', keybindingsJsonWin);
