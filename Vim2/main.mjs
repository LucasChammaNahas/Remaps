import { config } from './Config/config.mjs';
import { generateListWithAllCommands } from './Utils/generateListWithAllCommands.mjs';
import { getCommandType } from './Utils/getCommandType.mjs';
import fs from 'fs';



const commandList = generateListWithAllCommands(config);

for (const command of commandList) {
  const { modes, ...rest } = command;
  console.log(getCommandType(command));
}



// const jsonData = JSON.stringify(config, null, 2);
// fs.writeFileSync('output.json', jsonData);

