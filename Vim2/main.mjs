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

const vscodeFinal = [];

const commandList = generateListWithAllCommands(config);

for (const command of commandList) {
  const commandTypes = getCommandTypes(command);
  let updatedCommand;

  if (commandTypes.includes('code')) {
    updatedCommand = generateCorrectCodeStructure(command);
    vscodeFinal.push(updatedCommand);
  } else {
    updatedCommand = generateCorrectVimStructure(command);
    for (const type of commandTypes) {
      vimFinal[modes[type]].push(updatedCommand);
    }
  }
}

console.log('normal',vimFinal[modes.normal].length);
console.log('visual',vimFinal[modes.visual].length);
console.log('pending',vimFinal[modes.pending].length);
console.log('vscode',vscodeFinal.length);

const vimJsonData = JSON.stringify(vimFinal, null, 2);
fs.writeFileSync('vim.json', vimJsonData);

const vscodeJsonData = JSON.stringify(vscodeFinal, null, 2);
fs.writeFileSync('vscode.win.json', vscodeJsonData);
