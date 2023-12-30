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

const finalJson = {
  [modes.normal]: [],
  [modes.visual]: [],
  [modes.pending]: [],
};

const commandList = generateListWithAllCommands(config);

for (const command of commandList) {
  const commandTypes = getCommandTypes(command);
  let updatedCommand;

  if (commandTypes.includes('code')) {
    updatedCommand = generateCorrectCodeStructure(command);
  } else {
    updatedCommand = generateCorrectVimStructure(command);
    for (const type of commandTypes) {
      finalJson[modes[type]].push(updatedCommand);
    }
  }
}

console.log('normal',finalJson[modes.normal].length);
console.log('visual',finalJson[modes.visual].length);
console.log('pending',finalJson[modes.pending].length);

const jsonData = JSON.stringify(finalJson, null, 2);
fs.writeFileSync('output.json', jsonData);
