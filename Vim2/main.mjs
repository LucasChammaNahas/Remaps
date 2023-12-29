import { config } from './Config/config.mjs';
import { generateListWithAllCommands } from './Utils/generateListWithAllCommands.mjs';
import fs from 'fs';



generateListWithAllCommands(config);



// const jsonData = JSON.stringify(config, null, 2);
// fs.writeFileSync('output.json', jsonData);

