import fs from 'fs';
import { config } from './Config/config.mjs';
import { generateListWithAllCommands } from './Utils/generateListWithAllCommands.mjs';
import { getCommandTypes } from './Utils/getCommandTypes.mjs';
import {
  generateCorrectCodeStructure,
  generateCorrectVimStructure,
} from './Utils/generateCorrectStructure.mjs';

const commandList = generateListWithAllCommands(config);

for (const command of commandList) {
  const commandTypes = getCommandTypes(command);
  let updatedCommand;
  
  if (commandTypes.includes('code')) {
    updatedCommand = generateCorrectCodeStructure(command);
  } else {
    updatedCommand = generateCorrectVimStructure(command);
  }
}

// const jsonData = JSON.stringify(config, null, 2);
// fs.writeFileSync('output.json', jsonData);
