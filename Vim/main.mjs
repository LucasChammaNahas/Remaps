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

const vimFinal = {
  [modes.normal]: [],
  [modes.visual]: [],
  [modes.pending]: [],
};

const winFinal = [];
const macFinal = [];

const commandList = generateListWithAllCommands(config);

for (const command of commandList) {
  const commandTypes = getCommandTypes(command);

  if (commandTypes.includes('code')) {
    const winCommand = generateCorrectCodeStructure(command, 'win');
    winFinal.push(winCommand);

    const macCommand = generateCorrectCodeStructure(command, 'mac');
    macFinal.push(macCommand);
  } else {
    const vimCommand = generateCorrectVimStructure(command);

    for (const type of commandTypes) {
      vimFinal[modes[type]].push(vimCommand);
    }
  }
}

console.log('normal', vimFinal[modes.normal].length);
console.log('visual', vimFinal[modes.visual].length);
console.log('pending', vimFinal[modes.pending].length);
console.log('vscode', winFinal.length);

const vimJsonData = JSON.stringify(vimFinal, null, 2);
fs.writeFileSync('vim.json', vimJsonData);

const winJsonData = JSON.stringify(winFinal, null, 2);
fs.writeFileSync('vscode.win.json', winJsonData.replace(/\\"/g, "'"));

const macJsonData = JSON.stringify(macFinal, null, 2);
fs.writeFileSync('vscode.mac.json', macJsonData.replace(/\\"/g, "'"));
