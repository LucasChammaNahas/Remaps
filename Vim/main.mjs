import fs from 'fs';
import { config } from './Config/config.mjs';
import { generateListWithAllCommands } from './Utils/generateListWithAllCommands.mjs';
import { getCommandTypes } from './Utils/getCommandTypes.mjs';
import {
   generateCorrectCodeStructure,
   generateCorrectVimStructure,
} from './Utils/generateCorrectStructure.mjs';

const modes = {
   normal: 'vim.normalModeKeyBindingsNonRecursive',
   visual: 'vim.visualModeKeyBindingsNonRecursive',
   pending: 'vim.operatorPendingModeKeyBindingsNonRecursive',
};

const vimSettings = {
   [modes.normal]: [],
   [modes.visual]: [],
   [modes.pending]: [],
};

const keybindings = {
   win: [],
   mac: [],
};

const commandList = generateListWithAllCommands(config);

for (const command of commandList) {
   const commandTypes = getCommandTypes(command);

   if (commandTypes.includes('code')) {
      const winCommand = generateCorrectCodeStructure(command, 'win');
      keybindings.win.push(winCommand);

      const macCommand = generateCorrectCodeStructure(command, 'mac');
      keybindings.mac.push(macCommand);
   } else {
      const vimCommand = generateCorrectVimStructure(command);

      for (const type of commandTypes) {
         vimSettings[modes[type]].push(vimCommand);
      }
   }
}

for (const os of ['win', 'mac']) {
   const complementarySettingsJson =
      fs.readFileSync(`./Config/${os}.settings.jsonc`, 'utf8') || '{}';
   const complementarySettings = JSON.parse(complementarySettingsJson) || {};
   const settings = { ...complementarySettings, ...vimSettings };
   const settingsJson = JSON.stringify(settings, null, 2);
   fs.writeFileSync(`./Build/${os}.settings.json`, settingsJson);

   const keybindingsJson = JSON.stringify(keybindings[os], null, 2);
   fs.writeFileSync(`./Build/${os}.keybindings.json`, keybindingsJson.replace(/\\"/g, "'"));
}

console.log('normal', vimSettings[modes.normal].length);
console.log('visual', vimSettings[modes.visual].length);
console.log('pending', vimSettings[modes.pending].length);
console.log('Win Keybindings', keybindings.win.length);
console.log('Mac Keybindings', keybindings.mac.length);
